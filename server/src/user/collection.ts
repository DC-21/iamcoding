import { Request, Response } from "express";
import { RegisterDto } from "./dto";
import { validate } from "class-validator";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/prisma";
import { hash } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { sendMail } from "../util/mail";

export class UserCollection {
  async Register(req: Request, res: Response) {
    try {
      const dto = new RegisterDto(req.body);

      const errors = await validate(dto);
      if (errors.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({
          error: errors.map((e) => e.constraints),
        });
      }

      const username = await prisma.user.findUnique({
        where: {
          username: dto.username,
        },
      });

      if (username) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "username has been taken",
        });
      }

      const email = await prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });

      if (email) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "email already in use",
        });
      }

      const hashPassword = await hash(dto.password, 10);

      const user = {
        username: dto.username,
        firstname: dto.firstname,
        lastname: dto.lastname,
        email: dto.email,
        password: hashPassword,
        phone: dto.phone,
        address: dto.address,
      };

      const activationCode = Math.floor(
        1000 + Math.random() * 900000
      ).toString();

      const token = await jwt.sign(
        {
          user,
          activationCode,
        },
        `${process.env.ACTIVATION_SECRET}`,
        {
          expiresIn: "3m",
        }
      );

      await sendMail({
        to: dto.email,
        from: `${process.env.SMTP_MAIL}`,
        subject: "Activate your account",
        name: dto.username,
        activationCode: activationCode,
      });

      return res.status(StatusCodes.OK).json({
        activation_token: token,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }

  async activateUser(req: Request, res: Response) {
    try {
      const activation_token = req.headers["activation-token"];

      if (!activation_token) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Activation token not provided" });
      }

      const { activationCode } = req.body;

      const activationTokenString = Array.isArray(activation_token)
        ? activation_token[0]
        : activation_token;
      const decodedToken = jwt.verify(
        activationTokenString,
        `${process.env.ACTIVATION_SECRET}`
      ) as unknown as { user: any; activationCode: string };

      console.log(decodedToken);

      if (decodedToken.activationCode !== activationCode) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Activation codes do not match" });
      }

      const user = await prisma.user.create({
        data: {
          username: decodedToken.user.username,
          firstname: decodedToken.user.firstname,
          lastname: decodedToken.user.lastname,
          email: decodedToken.user.email,
          password: decodedToken.user.password,
          phone: decodedToken.user.phone,
          address: decodedToken.user.address,
        },
      });
      return res
        .status(StatusCodes.OK)
        .json({ message: "User activated successfully", user });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }
}

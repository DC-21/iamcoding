import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validate } from "class-validator";
import { CreateBootCampDto, FindDto, UpdateBootCampDto } from "./dto";
import { prisma } from "../config/prisma";

export class BootCampCollection {
  async create(req: Request, res: Response) {
    try {
      const dto = new CreateBootCampDto(req.body);

      const errors = await validate(dto);
      if (errors.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({
          error: errors.map((e) => e.constraints),
        });
      }

      const bootCamp = await prisma.bootCamp.create({
        data: {
          title: dto.title,
          description: dto.description,
          category: dto.category,
          starting: new Date(dto.starting),
          ending: new Date(dto.ending),
          duration: dto.duration,
          rating: dto.rating || 0,
          videos: dto.videos,
          authorId: dto.authorId,
        },
      });

      return res.status(StatusCodes.CREATED).json(bootCamp);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto = new UpdateBootCampDto(req.body);

      const errors = await validate(dto);
      if (errors.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({
          error: errors.map((e) => e.constraints),
        });
      }

      const bootCamp = await prisma.bootCamp.update({
        where: { id },
        data: {
          title: dto.title,
          description: dto.description,
          category: dto.category,
          registered: dto.registered ? { set: dto.registered } : undefined,
          starting: dto.starting ? new Date(dto.starting) : undefined,
          ending: dto.ending ? new Date(dto.ending) : undefined,
          duration: dto.duration,
          rating: dto.rating,
          videos: dto.videos,
          authorId: dto.authorId,
          completed: dto.completed,
        },
      });

      return res.status(StatusCodes.OK).json(bootCamp);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const dto = new FindDto({ id: Number(req.params.id) });

      const errors = await validate(dto);
      if (errors.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({
          error: errors.map((e) => e.constraints),
        });
      }

      const id = dto.id;
      const bootCamp = await prisma.bootCamp.findUnique({ where: { id } });

      if (!bootCamp) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Bootcamp not found",
        });
      }

      return res.status(StatusCodes.OK).json(bootCamp);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }

  async findAll(_req: Request, res: Response) {
    try {
      const bootCamps = await prisma.bootCamp.findMany();
      return res.status(StatusCodes.OK).json(bootCamps);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const dto = new FindDto({ id: Number(req.params.id) });

      const errors = await validate(dto);
      if (errors.length > 0) {
        return res.status(StatusCodes.CONFLICT).json({
          error: errors.map((e) => e.constraints),
        });
      }

      const id = dto.id;

      const bootCamp = await prisma.bootCamp.delete({ where: { id } });
      return res.status(StatusCodes.OK).json(bootCamp);
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong",
        error: error.message || error,
      });
    }
  }
}

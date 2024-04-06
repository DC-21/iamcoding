import { Request, Response } from "express";
import { RegisterDto } from "./dto";
import { validate } from "class-validator";
import { StatusCodes } from "http-status-codes";

export class UserCollection {
  async Register(req: Request, res: Response) {
    try {
      const dto = new RegisterDto(req.body);

      const errors = await validate(dto);
      if(errors.length>0){
        return res.status(StatusCodes.CONFLICT).json({
            error: errors.map((e)=>e.constraints);
        })
      }

    } catch (error: any) {}
  }
}

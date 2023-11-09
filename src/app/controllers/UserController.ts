import { Request, Response } from "express";
import User from "../models/User"

export class UserController {

  public post(req:Request, res:Response) {
    const { name, age, gender } = req.body
    //COLOCAR O MENINO ZOD PRA FUNFAR AQ
    const user = new User(name, age, gender);
    
    return res.json(user);
  }
}
import { Router, Request, Response, NextFunction } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { Validator } from "./middlewares/Validator";

import { UserCreationValidation } from "./validations/User/UserCreationValidation";

const routes = Router()

const createUser = new CreateUserController()


routes.post('/users', Validator(UserCreationValidation), createUser.handle)

export  {routes};
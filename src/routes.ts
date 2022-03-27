import { Router } from "express";

import { Validator } from "./middlewares/Validator";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { UserCreationValidation } from "./validations/User/UserCreationValidation";

import { CreateSessionController } from "./controllers/Session/CreateSessionController";
import { SessionCreationValidation } from "./validations/Session/SessionCreationValidation";

const routes = Router()

routes.post('/users', Validator(UserCreationValidation), new CreateUserController().handle)

routes.post('/session', Validator(SessionCreationValidation), new CreateSessionController().handle)

export  {routes};
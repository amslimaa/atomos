import { Router } from "express";

import { Validator } from "./middlewares/Validator";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { UserCreationValidation } from "./validations/User/UserCreationValidation";

import { CreateSessionController } from "./controllers/Session/CreateSessionController";
import { SessionCreationValidation } from "./validations/Session/SessionCreationValidation";

import {CreateOccupationController} from "./controllers/Occupation/CreateOccupationController";

import { CreateSectorController } from "./controllers/Sectors/CreateSectorController";

import { CreateRecordController } from "./controllers/Records/CreateRecordController";

import { CreateColaboratorController } from "./controllers/Colaborators/CreateColaboratorController";

const routes = Router()

routes.post('/users', Validator(UserCreationValidation), new CreateUserController().handle)

routes.post('/sessions', Validator(SessionCreationValidation), new CreateSessionController().handle)

routes.post('/occupations', new CreateOccupationController().handle)

routes.post('/sectors', new CreateSectorController().handle)

routes.post('/records/:colaboratorId', new CreateRecordController().handle)

routes.post('/colaborators', new CreateColaboratorController().handle)

export  {routes};
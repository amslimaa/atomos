import express from 'express';

const app = express();

const PORT = 3333;

import {routes} from "./routes";

import { adminJs, routerBro} from './admbro/config'

app.use(adminJs.options.rootPath, routerBro)

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));
import express from 'express';

const app = express();

const PORT = 3333;

import {routes} from "./routes";

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));
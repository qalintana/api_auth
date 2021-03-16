import "reflect-metadata";
import express from "express";

import "./database/connect";

import routes from "./routes";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`💥 server started at http://localhost/${PORT}`)
);

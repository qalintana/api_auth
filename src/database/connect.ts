import { createConnection } from "typeorm";

createConnection().then(() =>
  console.log("sucesso ao conectar ao banco de dados ")
);

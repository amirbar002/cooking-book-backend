import "reflect-metadata";
import { DataSource } from "typeorm";
import { RDBMS_MYSQL } from "./constants";
import { Recipes } from "./entity/Recipes";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: +3306,
  username: 'root',
  password:'root',
  database: "super",
  synchronize: true,
  logging: false,
  entities: [Recipes],
  migrations: [],

  subscribers: [],
});

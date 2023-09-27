import "reflect-metadata";
import { DataSource } from "typeorm";
import { RDBMS_MYSQL } from "./constants";
import { Recipes } from "./entity/Recipes";

export const AppDataSource = new DataSource({
  type: 'mysql',
<<<<<<< HEAD
  host: 'localhost',
  port: +3306,
  username: 'root',
  password:'root',
  database: "super",
=======
  host: 'ec2-52-50-161-219.eu-west-1.compute.amazonaws.com',
  port: +5432,
  username: 'kwpaabboccyfgd',
  password: '89ab46eb9d5504d1ce0cca421d89a1557fe2a4e97bac83a2ef66978354740fab',
  database: 'dqq96mo44mbgt',
>>>>>>> 22adc3984770fdce58c2bde8b46ddbc3a384857d
  synchronize: true,
  logging: false,
  entities: [Recipes],
  migrations: [],

  subscribers: [],
});

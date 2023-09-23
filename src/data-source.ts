import "reflect-metadata";
import { DataSource } from "typeorm";
import { RDBMS_MYSQL } from "./constants";
import { Recipes } from "./entity/Recipes";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'ec2-52-50-161-219.eu-west-1.compute.amazonaws.com',
  port: +5432,
  username: 'kwpaabboccyfgd',
  password: '89ab46eb9d5504d1ce0cca421d89a1557fe2a4e97bac83a2ef66978354740fab',
  database: 'dqq96mo44mbgt',
  synchronize: true,
  logging: false,
  entities: [Recipes],
  migrations: [],

  subscribers: [],
});

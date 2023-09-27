import "dotenv/config";
import express, { Request, Response, Application } from "express";
import { AppDataSource } from "./data-source";
import cors from "cors"
import recipes from "./routers/recipes";
import bodyParser from "body-parser";

(async () => {
  try {
    await AppDataSource.initialize();

    console.log("Successfully connected to mysql");

    const app: Application = express();
    app.use(cors());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

    app.use(express.json());

    app.use("/recipes", recipes);

    app.use((req: Request, res: Response) => {
      res.status(400).send("Resource not found!");
    });

    app.listen(+5432, () =>
      console.log("Server is listening on port " + 5432)
    );
  } catch (error) {
    console.error(error);
  }
})();

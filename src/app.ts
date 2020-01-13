import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import { RouterInterface } from "./interfaces/router.interface";

export class App {
  app: express.Application;
  port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeRoutes(Routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeRoutes(routes: ReadonlyArray<RouterInterface>): void {
    routes.forEach(route => route.routes(this.app));
  }
}

import * as express from "express";
import { Routes } from "./routes";
import { RouterInterface } from "./interfaces/router.interface";

export class App {
  app: express.Application;
  port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeRoutes(Routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeRoutes(routes: readonly RouterInterface[]): void {
    routes.forEach(route => route.routes(this.app));
  }
}

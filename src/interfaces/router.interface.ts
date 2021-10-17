import { Application } from "express";

export interface RouterInterface {
  routes(app: Application): void;
}

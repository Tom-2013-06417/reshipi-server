import { RecipeController } from "../controllers/";
import { Application } from "express";
import { RouterInterface } from "src/interfaces/router.interface";

export class RecipeRouter implements RouterInterface {
  controller: RecipeController;

  constructor() {
    this.controller = new RecipeController();
  }

  public routes(app: Application): void {
    app.route("/recipe/:id").get(this.controller.getRecipe);
    app
      .route("/recipe")
      .get(this.controller.getRecipe)
      .post(this.controller.postRecipe);

    app.route("/recipes").get(this.controller.getRecipes);
  }
}

import { RecipeRouter } from "./recipe.routes";
import { RouterInterface } from "src/interfaces/router.interface";

export const Routes: ReadonlyArray<RouterInterface> = [new RecipeRouter()];

import { Request, Response } from "express";

export class RecipeController {
  public getRecipe(request: Request, response: Response) {
    const id = request.params.id;
    const recipe = {
      id,
      title: "Tikka Masala WAZZUP",
      description: "This is a test description"
    };

    if (!id) {
      return response.status(403).json({ error: "Invalid request" });
    }

    return response.json(recipe);
  }

  public getRecipes(request: Request, response: Response) {
    return response.json([{}]);
  }
}

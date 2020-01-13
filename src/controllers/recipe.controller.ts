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

  public postRecipe(request: Request, response: Response) {
    const body = request.body;
    return response.json(body);
  }

  public getRecipes(request: Request, response: Response) {
    const query = request.query;
    const limit = query.limit;
    const offset = query.offset;

    return response.json([
      {
        id: 1,
        limit,
        offset
      },
      {
        id: 2,
        limit,
        offset
      }
    ]);
  }
}

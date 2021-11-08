import { ObjectId } from 'mongodb';
import Recipes, { Recipe, RecipeRequest } from './recipes.model';

interface Context {
  dataSources: {
    recipes: Recipes;
  };
}

// TODO: Share this
interface Response<Document> {
  status: boolean;
  message: string;
  body: Document[];
}

export const recipesResolver = async (
  _: undefined,
  __: undefined,
  { dataSources: { recipes } }: Context,
) => recipes.getRecipes();

export const recipeResolver = (
  _: undefined,
  args: { id?: string },
  { dataSources: { recipes } }: Context,
) => {
  if (args.id) {
    const id = new ObjectId(args.id);
    return recipes.getRecipe(id);
  }

  return undefined;
};

export const createRecipe = async (
  _: undefined,
  args: { recipe: RecipeRequest },
  { dataSources: { recipes } }: Context,
): Promise<Response<Recipe>> => {
  const recipe = { ...args.recipe };
  const result = await recipes.setRecipe(recipe);
  return {
    status: result.acknowledged,
    message: result.acknowledged
      ? 'Successfully created an recipe'
      : 'Failed to create an recipe',
    body: [{ _id: result.insertedId, ...recipe }],
  };
};

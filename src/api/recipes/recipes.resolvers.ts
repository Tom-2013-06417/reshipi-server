import { GraphQLFieldResolver, Source } from "graphql";
import { toNumber } from "../../utils";
import { RecipeArticle } from "./recipes.model";

export const recipesResolver: GraphQLFieldResolver<Source, undefined> =
  () => RecipeArticle;

export const recipeResolver: GraphQLFieldResolver<
  Source,
  { id: number }
> = (_, { id }) => RecipeArticle.find((article) => article.id === toNumber(id));

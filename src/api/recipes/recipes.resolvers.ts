import { GraphQLFieldResolver, Source } from "graphql";
import { toNumber } from "../utils";
import { RecipeArticle } from "./recipes.model";

export const recipeArticlesResolver: GraphQLFieldResolver<Source, undefined> =
  () => RecipeArticle;

export const recipeArticleResolver: GraphQLFieldResolver<
  Source,
  { id: number }
> = (_, { id }) => RecipeArticle.find((article) => article.id === toNumber(id));

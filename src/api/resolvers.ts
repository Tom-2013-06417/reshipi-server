import { recipeArticleResolver, recipeArticlesResolver } from './recipes';

export const resolvers = {
  Query: {
    recipeArticles: recipeArticlesResolver,
    recipeArticle: recipeArticleResolver,
  }
}

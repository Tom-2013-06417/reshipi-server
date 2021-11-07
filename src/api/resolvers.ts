import { articleResolver, articlesResolver, createArticle } from './articles';
import { recipeResolver, recipesResolver } from './recipes';

export const resolvers = {
  Query: {
    recipes: recipesResolver,
    recipe: recipeResolver,
    article: articleResolver,
    articles: articlesResolver,
  },
  Mutation: {
    createArticle,
  }
}

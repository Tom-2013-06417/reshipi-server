import { ObjectId } from 'mongodb';
import Recipes from '../recipes/recipes.model';
import Articles, { Article, ArticleRequest } from './articles.model';

interface Context {
  dataSources: {
    articles: Articles;
    recipes: Recipes;
  };
}

// TODO: Share this
interface Response<Document> {
  status: boolean;
  message: string;
  body: Document[];
}

export const articlesResolver = async (
  _: undefined,
  args: undefined,
  { dataSources: { articles } }: Context,
) => articles.getArticles();

export const articleResolver = async (
  _: undefined,
  args: { id?: string; seoUrl?: string },
  { dataSources: { articles, recipes } }: Context,
) => {
  if (args.id) {
    const id = new ObjectId(args.id);
    return articles.getArticle(id);
  }

  if (args.seoUrl) {
    const article = await articles.getArticleBySeoUrl(args.seoUrl);
    const recipe = await recipes.getRecipe(article.recipe);

    const newArticle = {
      ...article,
      recipe,
    };

    return newArticle;
  }

  return undefined;
};

export const createArticle = async (
  _: undefined,
  args: { article: ArticleRequest },
  { dataSources: { articles } }: Context,
): Promise<Response<Article>> => {
  const article = { ...args.article };
  const result = await articles.setArticle(article);
  return {
    status: result.acknowledged,
    message: result.acknowledged
      ? 'Successfully created an article'
      : 'Failed to create an article',
    body: [{ _id: result.insertedId, ...article, seoUrl: '', author: '' }],
  };
};

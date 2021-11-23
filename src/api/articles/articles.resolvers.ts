import { ObjectId } from 'mongodb';
import RecipesModel from '../recipes/recipes.model';
import ArticlesModel, { Article, ArticleRequest } from './articles.model';

interface Context {
  dataSources: {
    articles: ArticlesModel;
    recipes: RecipesModel;
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
    const recipe =
      article && article.recipe
        ? await recipes.getRecipe(article.recipe._id)
        : undefined;

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
  const article: Article = {
    ...args.article,
    seoUrl: 'stuff', // TODO: Process
    author: 'test', // TODO: Wire up
    _id: new ObjectId(),
  };
  const result = await articles.setArticle(article);

  return {
    status: result.acknowledged,
    message: result.acknowledged
      ? 'Successfully created an article'
      : 'Failed to create an article',
    body: [article],
  };
};

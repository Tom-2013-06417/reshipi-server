import { ObjectId } from 'mongodb';
import Articles, { Article, ArticleRequest } from './articles.model';

interface Context {
  dataSources: {
    articles: Articles;
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
export const articleResolver = (
  _: undefined,
  args: { id?: string },
  { dataSources: { articles } }: Context,
) => {
  if (args.id) {
    const id = new ObjectId(args.id);
    return articles.getArticle(id);
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

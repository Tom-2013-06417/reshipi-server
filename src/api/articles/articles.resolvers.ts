import { ObjectId } from 'bson';
import Articles, { Article } from './articles.model';

interface Context {
  dataSources: {
    articles: Articles
  }
}

// TODO: Share this
interface Response<Document> {
  status: boolean;
  message: string;
  body: Document[];
}

export const articlesResolver = async (_, args, { dataSources: {articles} }) => await articles.getArticles();
export const articleResolver = (_, args, { dataSources: {articles}}: Context) => {
  if (args.id) {
    const id = new ObjectId(args.id)
    return articles.getArticle(id);
  }
}

export const createArticle = async(_, args, { dataSources: {articles} }: Context): Promise<Response<Article>> => {
  const article = {...args.article};
  const result = await articles.setArticle(article);
  return {
    status: result.acknowledged,
    message: result.acknowledged ? 'Successfully created an article' : 'Failed to create an article',
    body: [{_id: result.insertedId, ...article}],
  }
}

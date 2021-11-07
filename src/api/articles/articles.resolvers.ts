import { ObjectId } from 'bson';
import Articles from './articles.model';

interface Context {
  dataSources: {
    articles: Articles
  }
}

export const articlesResolver = async (_, args, { dataSources: {articles} }) => await articles.getArticles();
export const articleResolver = (_, args, { dataSources: {articles}}: Context) => {
  if (args.id) {
    const id = new ObjectId(args.id)
    return articles.getArticle(id);
  }
}

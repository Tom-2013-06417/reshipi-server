import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';
import { Recipe } from '../recipes/recipes.model';

export interface Article {
  _id: ObjectId;
  title: string;
  seoDescription: string;
  seoUrl: string;
  body: string;
  author: string;
  recipe?: Recipe;
}

export type ArticleRequest = Omit<Article, '_id' | 'seoUrl' | 'author'>;

export default class ArticlesModel extends MongoDataSource<Article> {
  async setArticle(article: Article) {
    return this.collection.insertOne(article);
  }

  async getArticle(id: ObjectId) {
    return this.findOneById(id);
  }

  async getArticleBySeoUrl(seoUrl: string) {
    return this.collection.findOne({ seoUrl });
  }

  async getArticles() {
    const response = await this.collection.find().toArray();
    return Array.isArray(response) ? response : [];
  }
}

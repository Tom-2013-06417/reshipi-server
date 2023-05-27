import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';
import RecipesModel, { Recipe } from '../recipes/recipes.model';

export interface Article {
  _id: ObjectId;
  title: string;
  seoDescription: string;
  seoUrl: string;
  body: string;
  author: string;
  recipe: Recipe;
}

export interface RawArticle {
  _id: ObjectId;
  title: string;
  seoDescription: string;
  seoUrl: string;
  body: string;
  author: string;
  recipe: ObjectId;
}

export type ArticleRequest = Omit<Article, '_id' | 'seoUrl' | 'author'>;

export default class ArticlesModel extends MongoDataSource<RawArticle> {
  RecipeModel = RecipesModel;

  async setArticle(article: RawArticle) {
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

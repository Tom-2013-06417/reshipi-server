import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

export interface Article {
  _id: ObjectId;
  title: string;
  seoDescription: string;
  seoUrl: string;
  body: string;
  author: string;
}

export default class Articles extends MongoDataSource<Articles> {
  async getArticle(id: ObjectId) {
    return this.findOneById(id);
  }

  async getArticles() {
    const response = await this.collection.find().toArray();
    return Array.isArray(response)
      ? response
      : [];
  }
}

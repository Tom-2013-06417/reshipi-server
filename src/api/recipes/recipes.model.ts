import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';

export interface Ingredient {
  amount: { value: number; unit: string };
  name: string;
}

export interface Step {
  id: number;
  value: string;
}

export interface Recipe {
  _id: ObjectId;
  title: string;
  description: string;
  seoUrl: string;
  author: string;
  ingredients: Ingredient[];
  steps: Step[];
}

export type RecipeRequest = Omit<Recipe, '_id'>;

export default class RecipesModel extends MongoDataSource<Recipe> {
  async setRecipe(recipe: Recipe) {
    return this.collection.insertOne(recipe);
  }

  async getRecipe(id: ObjectId) {
    return this.findOneById(id);
  }

  async getRecipes() {
    const response = await this.collection.find().toArray();
    return Array.isArray(response) ? response : [];
  }
}

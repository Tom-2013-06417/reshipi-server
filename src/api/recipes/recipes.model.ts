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
  ingredients: Ingredient[];
  steps: Step[];
}

export type RecipeRequest = Omit<Recipe, '_id'>;

export default class Recipes extends MongoDataSource<Recipe> {
  async setRecipe(recipe: RecipeRequest) {
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

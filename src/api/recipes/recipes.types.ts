import { gql } from "apollo-server-core";

export const RecipeTypes = gql`
  type Query {
    recipeArticles: [RecipeArticle]
    recipeArticle(id: ID!): RecipeArticle
  }

  type RecipeArticle {
    id: Int!
    title: String
    seoDescription: String
    seoUrl: String
    body: String
    author: String
    recipe: Recipe
  }

  type Recipe {
    title: String
    description: String
    ingredients: [Ingredient]
    steps: [RecipeSteps]
  }

  type Ingredient {
    id: Int
    amount: IngredientAmount
    name: String
  }

  type IngredientAmount {
    value: Float
    unit: String
  }

  type RecipeSteps {
    id: Int
    value: String
  }
`;

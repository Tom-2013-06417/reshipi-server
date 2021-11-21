import { gql } from 'apollo-server-core';

export const RecipeTypes = gql`
  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  type Recipe {
    title: String!
    description: String!
    ingredients: [Ingredient!]!
    steps: [RecipeSteps!]!
  }

  type Ingredient {
    id: Int
    amount: IngredientAmount!
    name: String!
  }

  type IngredientAmount {
    value: Float!
    unit: String!
  }

  type RecipeSteps {
    id: Int
    value: String!
  }

  type Mutation {
    createRecipe(recipe: RecipeRequest): RecipeResponse!
  }

  input RecipeRequest {
    title: String
    description: String
    ingredients: [IngredientRequest]
    steps: [RecipeStepRequest]
  }

  input IngredientRequest {
    id: Int
    amount: String
    name: String
  }

  input RecipeStepRequest {
    value: String
  }

  type RecipeResponse {
    status: Boolean!
    message: String
    body: [Recipe]
  }
`;

export default RecipeTypes;

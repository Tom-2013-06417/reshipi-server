import { gql } from "apollo-server-core";

export const RecipeTypes = gql`
  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
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

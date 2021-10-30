import { gql } from "apollo-server-core"

export const RecipeTypes = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

import { gql } from 'apollo-server-core';

export const ArticleTypes = gql`
  type Query {
    articles: [Article]
    article(id: ID): Article
  }

  type Article {
    _id: String!
    title: String!
    seoDescription: String!
    seoUrl: String!
    body: String!
    author: String
    recipe: Recipe
  }

  type Mutation {
    createArticle(article: ArticleRequest): ArticleResponse!
  }

  input ArticleRequest {
    title: String
    seoDescription: String
    body: String
  }

  type ArticleResponse {
    status: Boolean!
    message: String
    body: [Article]
  }
`;

export default ArticleTypes;

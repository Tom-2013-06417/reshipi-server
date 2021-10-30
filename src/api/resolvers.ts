import { booksResolver } from './recipes';

export const resolvers = {
  Query: {
    books: booksResolver,
  }
}

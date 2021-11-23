import { Server, createServer } from 'http';
import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { Db } from 'mongodb';
import { schema } from './api';
import { mongo } from './database/mongodb';
import ArticlesModel from './api/articles/articles.model';
import RecipesModel from './api/recipes/recipes.model';

export default class App {
  private app: Express;
  private db: Db;
  private httpServer: Server;
  private port: number;
  private server: ApolloServer;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    const mongoDb = mongo;
    mongoDb
      .connect()
      .then(() => {
        console.log('Connected to DB');
      })
      .catch(() => console.log('Unable to connect to DB'));

    this.db = mongoDb.db();
    this.httpServer = createServer(this.app);

    const articles = new ArticlesModel(this.db.collection('articles'));
    const recipes = new RecipesModel(this.db.collection('recipes'));

    this.server = new ApolloServer({
      schema,
      dataSources: () => ({
        articles,
        recipes,
      }),
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });
  }

  async listen() {
    await this.server.start();
    this.server.applyMiddleware({ app: this.app });
    await new Promise<void>(resolve => {
      this.httpServer.listen({ port: this.port }, resolve);
    });

    console.log(
      `🚀 Server ready at http://localhost:${this.port}${this.server.graphqlPath}`,
    );
  }
}

import * as express from 'express';
import * as http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { Db } from 'mongodb';
import { schema } from './api';
import { mongo } from './database/mongodb';
import Articles from './api/articles/articles.model';
import Recipes from './api/recipes/recipes.model';

export default class App {
  private app: express.Application;

  private httpServer: http.Server;

  private port: number;

  private server: ApolloServer;

  private db: Db;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    const mongoDb = mongo;
    mongoDb.connect().then(() => {
      console.log('Connected to DB');
    });
    this.db = mongoDb.db();

    this.httpServer = http.createServer(this.app);
    this.server = new ApolloServer({
      schema,
      dataSources: () => ({
        articles: new Articles(this.db.collection('articles')),
        recipes: new Recipes(this.db.collection('recipes')),
      }),
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });
  }

  async listen() {
    await this.server.start();
    this.server.applyMiddleware({ app: this.app });
    await new Promise<void>(resolve =>
      this.httpServer.listen({ port: this.port }, resolve),
    );

    console.log(
      `🚀 Server ready at http://localhost:${this.port}${this.server.graphqlPath}`,
    );
  }
}

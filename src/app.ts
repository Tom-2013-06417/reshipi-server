import * as express from "express";
import * as http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, gql } from "apollo-server-core";
import { schema } from "./api";

export class App {
  private app: express.Application;
  private httpServer: http.Server;
  private port: number;
  private server: ApolloServer;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  async listen() {
    this.httpServer = http.createServer(this.app);
    this.server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    await this.server.start();
    this.server.applyMiddleware({ app: this.app });

    await new Promise<void>((resolve) =>
      this.httpServer.listen({ port: this.port }, resolve)
    );

    console.log(
      `🚀 Server ready at http://localhost:${this.port}${this.server.graphqlPath}`
    );
  }
}

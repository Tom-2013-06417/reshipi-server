import express, { Express } from 'express';
import { Server, createServer } from 'http';
import payload from 'payload';
import { HOST, MONGO_URI, PAYLOAD_SECRET } from './config';

export default class App {
  private app: Express;
  private httpServer: Server;
  private host: string;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.host = HOST;

    this.httpServer = createServer(this.app);

    payload
      .init({
        secret: PAYLOAD_SECRET,
        mongoURL: MONGO_URI,
        express: this.app,
      })
      .then(() => {
        console.log('Connected to Payload');
      });
  }

  async listen() {
    await new Promise<void>(resolve => {
      this.httpServer.listen({ host: this.host, port: this.port }, resolve);
    });

    console.log(`🚀 Server ready at ${this.host}:${this.port}`);
  }
}

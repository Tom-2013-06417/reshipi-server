import express, { Express } from 'express';
import { Server, createServer } from 'http';
import payload from 'payload';
import { MONGO_URI, PAYLOAD_SECRET } from './config';

export default class App {
  private app: Express;
  private httpServer: Server;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

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
      this.httpServer.listen({ port: this.port }, resolve);
    });

    console.log(`🚀 Server ready at http://localhost:${this.port}`);
  }
}

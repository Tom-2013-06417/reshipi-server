import express, { Express } from 'express';
import { Server, createServer } from 'http';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import payload from 'payload';
import {
  HOST,
  MONGO_URI,
  PAYLOAD_SECRET,
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
  SENDGRID_FROM_NAME,
} from './config';

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

    const emailConfig =
      process.env.NODE_ENV === 'production'
        ? {
            email: {
              transportOptions: nodemailerSendgrid({
                apiKey: SENDGRID_API_KEY,
              }),
              fromAddress: SENDGRID_FROM_EMAIL,
              fromName: SENDGRID_FROM_NAME,
            },
          }
        : {
            email: {
              fromAddress: SENDGRID_FROM_EMAIL,
              fromName: SENDGRID_FROM_NAME,
              logMockCredentials: true,
            },
          };

    payload
      .init({
        secret: PAYLOAD_SECRET,
        mongoURL: MONGO_URI,
        express: this.app,
        ...emailConfig,
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

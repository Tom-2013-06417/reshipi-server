import { PostsController } from './post.controller';
import { Controller } from 'src/interfaces/controller.interface';

export const controllers: ReadonlyArray<Controller> = [
  new PostsController(),
];

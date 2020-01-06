import { Router, Request, Response } from 'express';
import { Post } from '../interfaces/post.interface';
import { Controller } from 'src/interfaces/controller.interface';

export class PostsController implements Controller {
  path = '/posts';
  router = Router();

  posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    }
  ];

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createPost);
  }

  getAllPosts = (req: Request, res: Response) => {
    res.send(this.posts);
  }

  createPost = (req: Request, res: Response) => {
    const post: Post = req.body;
    this.posts = [...this.posts, post];
    res.send(post);
  }
}

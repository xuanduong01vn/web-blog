import express from 'express';
import postController from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/',postController.getPosts);

export default postRouter;

import express from 'express';
import postController from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/',postController.getPosts);
postRouter.get('/:id',postController.getPost);
postRouter.post('/',postController.addPost);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);

export default postRouter;

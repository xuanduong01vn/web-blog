import commentController from '../controllers/commentController.js';
import express from 'express';

const commentRouter = express.Router();

commentRouter.get('/', commentController.getAllComments);
commentRouter.get('/:id', commentController.getComment);
commentRouter.post('/', commentController.addComment);
commentRouter.put('/:id', commentController.updateComment);
commentRouter.delete('/:id', commentController.deleteComment);

export default commentRouter;
import express from 'express';
import typePostController from '../controllers/typePostCotroller.js';

const typePostRouter = express.Router();
typePostRouter.get('/', typePostController.getTypePosts);

export default typePostRouter;
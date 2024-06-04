import express from 'express';
import tagController from '../controllers/tagController.js';

const tagRouter = express.Router();

tagRouter.get('/', tagController.getAllTags);

export default tagRouter;
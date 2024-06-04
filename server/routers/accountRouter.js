import express from 'express';
import accountController from '../controllers/accountController.js';

const accountRouter = express.Router();

accountRouter.get('/',accountController.getPosts);

export default accountRouter;

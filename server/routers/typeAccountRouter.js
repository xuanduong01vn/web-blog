import express from 'express';
import typeAccountController from '../controllers/typeAccountController.js';

const typeAccountRouter=express.Router();
typeAccountRouter.get('/', typeAccountController.getTypeAccounts);

export default typeAccountRouter;
import {fileController, upload} from '../controllers/fileController.js';
import express from 'express';

const fileRouter = express.Router();

fileRouter.post('/upload', upload.single('file'), fileController.uploadFile);

export default fileRouter;
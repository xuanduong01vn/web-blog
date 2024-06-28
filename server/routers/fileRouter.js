import {fileController, upload} from '../controllers/fileController.js';
import express from 'express';

const fileRouter = express.Router();

fileRouter.post('/upload-avatar', upload.single('avatar'), fileController.uploadAvatar);
fileRouter.post('/upload-post', upload.single('post'), fileController.uploadPost);

export default fileRouter;
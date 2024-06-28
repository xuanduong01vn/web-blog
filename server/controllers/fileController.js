import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let filePath;
    if(file.fieldname =='avatar'){
      filePath='images/avatars';
    }
    else if(file.fieldname =='post'){
      filePath='images/posts';
    }
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage});

const fileController={
  uploadAvatar: async(req, res) => {
    const fileUrl = `http://localhost:9999/file/avatar/${req.file.filename}`;
    res.status(200).json({ message: 'Avatar uploaded successfully', file: req.file, fileUrl });
  },
  uploadPost: async(req, res) => {
    const fileUrl = `http://localhost:9999/file/post/${req.file.filename}`;
    res.status(200).json({ message: 'File post uploaded successfully', file: req.file, fileUrl });
  },
}

export {fileController, upload};
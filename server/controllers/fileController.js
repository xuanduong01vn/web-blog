import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const fileController={
  uploadFile: async(req, res) => {
    const fileUrl = `http://localhost:9999/file/${req.file.filename}`;
    res.status(200).json({ message: 'File uploaded successfully', file: req.file, fileUrl });
  }
}

export {fileController, upload};
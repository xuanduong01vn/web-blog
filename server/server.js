import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

import postRouter from './routers/postRouter.js';
import accountRouter from './routers/accountRouter.js';
import typePostRouter from './routers/typePostRouter.js';
import typeAccountRouter from './routers/typeAccountRouter.js';
import tagRouter from './routers/tagRouter.js';
import commentRouter from './routers/commentRouter.js';



const app = express();
const port = 9999;

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?${process.env.MONGO_OPTIONS}`,{
  maxPoolSize:50,
  wtimeoutMS:2500,
  useNewUrlParser:true,
  useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.log('Error connecting with error code:', err.message);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("http://localhost:3001"));
app.use(morgan("common"));

app.use('/posts', postRouter);
app.use('/accounts', accountRouter);
app.use('/type-post', typePostRouter);
app.use('/type-account', typeAccountRouter);
app.use('/tags', tagRouter);
app.use('/comments', commentRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
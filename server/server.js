import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import postRouter from './routers/postRouter.js';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
const port = 3001;

mongoose.connect("mongodb+srv://xuanduong01vn:xd123456@cluster0.rgrpavy.mongodb.net/webQA?retryWrites=true&w=majority&appName=Cluster0",{
  maxPoolSize:50,
  wtimeoutMS:2500,
  useNewUrlParser:true
  })
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.log('Error connecting with error code:', err.message);
});

app.use(bodyParser.json());
app.use(cors("http://localhost:3000"));
app.use(morgan("common"));

app.use('/posts', postRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import mongoose from "mongoose";
import Account from "./accountModel.mjs";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content:{
    type: String,

  },
  idTypePost: {
    type: Number,
  },
  idAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Account,
  },
  amountLiked:{
    type: Number,
  },
  amountMarked: {
    type: Number,
  },
  isDeleted:{
    type: Boolean,
  },
  createAt:{
    type: Date,
  }
});


let Post = mongoose.model('Post', postSchema);


export default Post;
import mongoose from "mongoose";
import AccountModel from "./accountModel.mjs";
import TypePostModel from "./typePostModel.mjs";


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
    ref: TypePostModel,
  },
  idAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountModel,
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
  },
  listTag:{
    type: Array,
  },
  isDeleted:{
    type: Boolean,
  },
});


let Post = mongoose.model('Post', postSchema);


export default Post;
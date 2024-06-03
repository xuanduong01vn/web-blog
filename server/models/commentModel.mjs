import mongoose from "mongoose";
import AccountModel from "./accountModel.mjs";
import PostModel from "./typePostModel.mjs";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  idTypePost: {
    type: Number,
    ref: PostModel,
  },
  idAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: AccountModel,
  },
  idParent:{
    type: Number,
  },
  isDeleted:{
    type: Boolean,
  },
  createAt:{
    type: Date,
  },
});


let Comment = mongoose.model('Comment', commentSchema);

export default Comment;
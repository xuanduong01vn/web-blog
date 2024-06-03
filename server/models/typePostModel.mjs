import mongoose from "mongoose";

const typePostSchema = new mongoose.Schema({
  idTypePost:{
    type: Number,
    require: true
  },
  nameTypePost:{
    type: String,
    require: true
  }
})


let TypePost = mongoose.model('TypePost', typePostSchema);

export default TypePost;


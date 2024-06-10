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
}, 
{ collection: 'typePost' }, 
{
  versionKey: false // loại bỏ __v khỏi các tài liệu
});


let TypePost = mongoose.model('TypePost', typePostSchema);

export default TypePost;


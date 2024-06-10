import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  nameTag:{
    type: String,
    require: true
  },
  createAt:{
    type: Date,
    require: true
  },
  isDeleted:{
    type: Boolean,
    require: true
  },
}, 
{
  versionKey: false // loại bỏ __v khỏi các tài liệu
})


let Tag = mongoose.model('Tag', tagSchema);

export default Tag;
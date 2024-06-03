import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  }
})


let Tag = mongoose.model('Tag', tagSchema);

export default Tag;
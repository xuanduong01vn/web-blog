import mongoose from "mongoose";

const typeAccountSchema = new mongoose.Schema({
  idTypeAccount:{
    type: Number,
    require: true
  },
  nameTypeAccount:{
    type: String,
    require: true
  }
})


let TypeAccount = mongoose.model('TypeAccount', typeAccountSchema);

export default TypeAccount;
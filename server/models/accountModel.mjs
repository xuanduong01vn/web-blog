import mongoose from "mongoose";
import TypeAccount from "./typeAccountModel.mjs";

const accountSchema = new mongoose.Schema({
  username:{
    type: String,
    require: true
  },
  fullname:{
    type: String,
    require: true
  },
  idTypeAccount:{
    type: mongoose.Schema.Types.Number,
    ref: TypeAccount,
    require: true
  },
  birthday:{
    type: Date,
    require: true
  },
  createAt:{
    type: Date,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  listLiked:{
    type: Array,
    
  },
  listMarked:{
    type: Array,

  },
  isDeleted:{
    type: Boolean,
    require: true
  },
});

let Account = mongoose.model('Account', accountSchema);

export default Account;
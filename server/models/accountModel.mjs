import mongoose from "mongoose";
import TypeAccount from "./typeAccountModel.mjs";

const accountSchema = new mongoose.Schema({
  username:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  fullname:{
    type: String,
  },
  idTypeAccount:{
    type: mongoose.Schema.Types.Number,
    ref: TypeAccount,
  },
  birthday:{
    type: Date,
  },
  createAt:{
    type: Date,
  },
  avatar:{
    type: String,
  },
  email:{
    type: String,
  },
  listLiked:{
    type: Array,
  },
  listMarked:{
    type: Array,
  },
  isDeleted:{
    type: Boolean,
  },
}, 
{
  versionKey: false // loại bỏ __v khỏi các tài liệu
});

let Account = mongoose.model('Account', accountSchema);

export default Account;
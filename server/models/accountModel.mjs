import mongoose from "mongoose"

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
    type: Number,
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
});

let Account = mongoose.model('Account', accountSchema);

export default Account;
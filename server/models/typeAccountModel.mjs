import mongoose from 'mongoose';

const typeAccountSchema = new mongoose.Schema({
  idTypeAccount:{
    type: Number,
    require: true
  },
  nameTypeAccount:{
    type: String,
    require: true
  }
}, 
{ collection: 'typeAccount' }, 
{
  versionKey: false // loại bỏ __v khỏi các tài liệu
})


let TypeAccount = mongoose.model('TypeAccount', typeAccountSchema);

export default TypeAccount;
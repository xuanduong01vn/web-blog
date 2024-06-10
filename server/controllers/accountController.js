import accountModel from '../models/accountModel.mjs';
import { APIfeatures } from '../lib/features.js';

const accountController ={
  getAccounts: async (req,res) =>{
    try{
      let features = new APIfeatures(accountModel.find(), req.query)
        .sorting()
        .searching()
        .filtering();;
      const allAccounts = await features.query;
      res.status(200).json(allAccounts);
    }
    catch(err){
      res.status(500).json(err.message);
    }
  },
  getAccount: async (req,res) =>{
    try {
      const acc = await accountModel.findById(req.params.id);
      res.status(200).json(acc);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  addAccount: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      if (!username || !password || username.length==0 || !email ) {
        return res.status(400).json("Username and password are required");
      }

      const newAccount = await accountModel(req.body);
      const account = await accountModel.findOne({username});
      const emailAccount = await accountModel.findOne({email});

      if( account){
        res.status(200).json("Tài khoản đã tồn tại");
      }
      else if(emailAccount){
        res.status(200).json("Email đã tồn tại");
      }
      else{
        const saveAccount = await newAccount.save();
        res.status(200).json(saveAccount);
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default accountController;
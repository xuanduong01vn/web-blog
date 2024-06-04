import accountModel from '../models/accountModel.mjs';

import { APIfeatures } from '../lib/features.js';

const accountController ={
  getPosts: async (req,res) =>{
    try{
      let features = new APIfeatures(accountModel.find(), req.query);

      const allAccounts = await features.query;

      res.status(200).json(allAccounts);
    }
    catch(err){
      res.status(500).json(err.message);
    }
  }
};

export default accountController;
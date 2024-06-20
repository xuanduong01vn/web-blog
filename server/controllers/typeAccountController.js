import typeAccountModel from '../models/typeAccountModel.mjs';
import { APIfeatures } from '../lib/features.js';

const typeAccountController ={
  getTypeAccounts: async (req, res)=>{
    try {
      let features = new APIfeatures(typeAccountModel.find(), req.query)
        .sorting()
        .search()
        .filtering();
      const allTypeAccounts = await features.query;
      res.status(200).json(allTypeAccounts);
    } catch (error) {
      res.status(500).json(err.message);
    }
  }

};

export default typeAccountController;
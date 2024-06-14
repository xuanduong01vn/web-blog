import typePostModel from '../models/typePostModel.mjs';
import { APIfeatures } from '../lib/features.js';

const typePostController = {
  getTypePosts: async (req, res)=>{
    try{
      let features = new APIfeatures(typePostModel.find(), req.query)
        .sorting()
        .searching()
        .filtering();
      const allTypePosts = await features.query;
      res.status(200).json(allTypePosts);
    }
    catch(err){
      res.status(500).json(err.message);
    }
  },
};

export default typePostController;

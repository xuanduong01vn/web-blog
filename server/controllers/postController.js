import postModel from '../models/postModel.mjs';

import { APIfeatures } from '../lib/features.js';

const postController ={
  getPosts: async (req,res) =>{
    try{
      let features = new APIfeatures(postModel.find(), req.query);

      const allPosts = await features.query;

      res.status(200).json(allPosts);
    }
    catch(err){
      res.status(500).json(err.message);
    }
  }
};

export default postController;
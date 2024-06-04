import TagModel from '../models/tagModel.mjs';
import { APIfeatures } from '../lib/features.js';

const tagController ={
  getAllTags: async(req,res) =>{
    try {
      let features= new APIfeatures(TagModel.find(), req.query);
      const allTags = await features.query;
      res.status(200).json(allTags);
    } catch (err) {
      res.status(200).json(err.message);
    }
  }
};

export default tagController;

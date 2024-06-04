import CommentModel from '../models/commentModel.mjs';
import { APIfeatures } from '../lib/features.js';

const commentController={
  getAllComments: async(req, res)=>{
    try {
      let features= new APIfeatures(CommentModel.find(), req.query);
      const allComments = await features.query;
      res.status(200).json(allComments);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};

export default commentController;
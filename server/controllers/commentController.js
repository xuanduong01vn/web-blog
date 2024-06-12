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
  },
  getComment: async (req,res) =>{
    try {
      const comment = await CommentModel.findById(req.params.id);
      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  addComment: async (req, res) => {
    try {
      const newcomment = await CommentModel(req.body);
      const savecomment = await newcomment.save();
      res.status(200).json(savecomment);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  updateComment: async (req, res) => {
    try {
      const comment = await CommentModel.findById(req.params.id);
      await comment.updateOne({ $set: req.body });
      const updatedcomment = await CommentModel.findById(req.params.id);
      res.status(200).json({
        message: "Updated successfully!",
        data: updatedcomment,
      });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const comment = await CommentModel.findByIdAndDelete(req.params.id);
      if (!comment) {
        return res.status(404).json({ message: "Không có comment này" });
      }
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};

export default commentController;
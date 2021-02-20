import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const CommentsSchema = new mongoose.Schema({
  commentId: String,
  artId: String,
  userId: String,
  body: String,
  likes: Number,
  isActive: Boolean,
  isDeleted: Boolean,
  createdAt: String,
  updatedAt: String
});

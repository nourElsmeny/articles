import * as mongoose from 'mongoose';
export const ReplySchema = new mongoose.Schema({
  replyId: String,
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

import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export const AriticlesSchema = new mongoose.Schema({
  articleId: String,
  autherId: String,
  title: String,
  body: String,
  likes: Number,
  isActive: Boolean,
  isDeleted: Boolean,
  createdAt: String,
  updatedAt: String,
});

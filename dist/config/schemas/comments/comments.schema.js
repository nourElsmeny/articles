"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = void 0;
const mongoose = require("mongoose");
exports.CommentsSchema = new mongoose.Schema({
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
//# sourceMappingURL=comments.schema.js.map
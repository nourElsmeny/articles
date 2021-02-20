"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplySchema = void 0;
const mongoose = require("mongoose");
exports.ReplySchema = new mongoose.Schema({
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
//# sourceMappingURL=reply.schema.js.map
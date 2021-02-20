"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AriticlesSchema = void 0;
const mongoose = require("mongoose");
exports.AriticlesSchema = new mongoose.Schema({
    articleId: String,
    autherId: String,
    title: String,
    body: String,
    likes: Number,
    isActive: Boolean,
    isDeleted: Boolean,
    isBlocked: Boolean,
    createdAt: String,
    updatedAt: String,
});
//# sourceMappingURL=articles.schema.js.map
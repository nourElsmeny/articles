"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    image: String,
    country: String,
    mobileNumber: String,
    countryCode: String,
    address: String,
    location: String,
    role: String,
    gender: String,
    pirthDate: String,
    email: String,
    emailVirefy: Boolean,
    mobileViryfy: Boolean,
    isActive: Boolean,
    isDeleted: Boolean,
    isLogin: Boolean,
    isBlocked: Boolean,
    userToken: String,
    oldPassword: String,
    createdAt: String,
    updatedAt: String,
});
//# sourceMappingURL=user.schema.js.map
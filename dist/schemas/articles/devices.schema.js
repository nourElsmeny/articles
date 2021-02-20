"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose = require("mongoose");
exports.DeviceSchema = new mongoose.Schema({
    deviceId: String,
    userId: String,
    detail: String,
    isActive: Boolean,
    isDeleted: Boolean,
    isBlocked: Boolean,
    createdAt: String,
    updatedAt: String,
});
//# sourceMappingURL=devices.schema.js.map
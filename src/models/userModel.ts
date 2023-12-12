import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['User', 'Seller', 'Admin'], default: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const userModel = model('User', userSchema);

export default userModel

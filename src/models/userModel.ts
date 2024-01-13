import { Schema, model } from 'mongoose'
import validator from 'validator'

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: {
        type: String,
        required: [ true, 'Please enter a password' ]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [ validator.isEmail, 'Please enter a valid email' ]
    },
    role: {
        type: String,
        enum: ['User', 'Seller', 'Admin'],
        default: "User"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const User = model('User', userSchema);

export default User

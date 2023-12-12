import { Schema, model } from 'mongoose'

const ratingSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true },
    property: { type: Schema.ObjectId, ref: 'User', required: true },
    value: { type: Number, min: 1, max: 5, required: true },
    review: String,
    timestamp: { type: Date, default: Date.now }
})

const ratingModel = model('Rating', ratingSchema)

export default ratingModel

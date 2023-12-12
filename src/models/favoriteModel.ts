import { Schema, model } from 'mongoose'

const favoriteSchema = new Schema({
    user: { type: Schema.ObjectId, ref: 'User', required: true},
    property: { type: Schema.ObjectId, ref: 'Property', required: true },
    timestamp: { type: Date, default: Date.now }
})

const favoriteModel = model("Favorite", favoriteSchema)

export default favoriteModel

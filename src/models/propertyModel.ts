import { Schema, model } from 'mongoose'

const propertySchema = new Schema({
    title: { type: String, required: true },
    description: String,
    type: { type: String, required: true },
    price: { type: String, required: true },
    bedrooms: Number,
    bathrooms: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const propertyModel = model('Property', propertySchema)

export default propertyModel

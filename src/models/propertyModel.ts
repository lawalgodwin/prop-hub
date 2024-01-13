import { Schema, model } from 'mongoose'

const propertySchema = new Schema({
    title: { type: String, required: true },
    description: String,
    type: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String }],
    status: {type: String, enum: ['For Sale', 'For Rent', 'Sold', 'Rented'], default: 'For Sale'},
    bedrooms: Number,
    bathrooms: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const propertyModel = model('Property', propertySchema)

export default propertyModel

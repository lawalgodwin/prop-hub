import { Schema, model} from 'mongoose'

const messageSchema = new Schema({
    sender: { type: Schema.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.ObjectId, ref: 'User', required: true },
    property: { type: Schema.ObjectId, ref: 'Property', required: true },
    content: { type: String, require: true },
    timestamp: { type: Date, default: Date.now }
})

const messageModel = model('Message', messageSchema)

export default messageModel;

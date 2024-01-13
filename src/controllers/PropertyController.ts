import { getProperty, deleteProperty, updateProperty } from "../utils/property"
import { RequestHandler } from "express"
import Property from '../models/propertyModel'
import mongoose from "mongoose"

class PropertyController {
    static addNew: RequestHandler = async (req, res) => {
        try {
            const newProperty = new Property(req.body)
            const result = await newProperty.save()
            res.json({ result })
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError){
                throw Error(error.message)
            }
            else {
                console.log(error)
            }
        }
    }
    static all: RequestHandler = async (req, res) => {
        try {
            const result = await getProperty()
            res.status(200).json({result})
        } catch (error) {
            res.json({ error: (error as Error).message })
        }
    }

    static getPropertById: RequestHandler = async (req, res) => {
        const id = req.params?.id
        try {
            const result = await getProperty(id)
            if (!result) {
                res.status(404).json({ error: "Not Found" })
                return
            }
            res.status(200).json({result})
        } catch (error) {
            res.status(400).json({ error: "Bad Request" })
        }
    }

    static removePropertyById: RequestHandler = async (req, res) => {
        const id = req.params?.id
        try {
            const property = await getProperty(id)
            if (!property) {
                res.status(404).json({ error: "Not Found" })
                return
            }
            await deleteProperty(id)
            res.status(200).json({ message: 'deleted successfully' })       
        } catch (error) {
            res.status(400).json({ error: "Bad Request" })
        }
    }

    static updatePropertyById: RequestHandler = async (req, res) => {
        const id = req.params?.id
        const newData = req.body || null
        if (!id || Object.keys(newData).length <= 0) {
            res.status(400).json({ error: "Bad Request" })
            return
        }
        try {
            const property = await getProperty(id)
            if (!property) {
                res.status(404).json({ error: "Not Found" })
                return
            }
            await updateProperty(id, newData)
            res.status(200).json({ message: 'updated successfully' })       
        } catch (error) {
            res.status(400).json({ error: "Bad Request" })
        }
    }
}

export default PropertyController
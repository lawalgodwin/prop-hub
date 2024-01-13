import Property from '../models/propertyModel'
import { PropertyType } from '../models/modelTypes'


export const create = async (property: PropertyType) => {
    console.log(property)
    try {
        const newProperty = new Property(property)
        const result = await newProperty.save()
        console.log(result)       
    } catch (error) {
        throw Error((error as Error).message)
    }
}

export const getProperty = async (id?: string) => {
    try {
        let result = null
        if (!id){
            result = await Property.find({})
            return (result)
        }
        result = await Property.findById({ _id: id })
        return result
    } catch (error) {
        throw Error((error as Error).message)
    }
}

export const deleteProperty = async (id: string) => {
    try {
        await Property.deleteOne({ _id: id })
        return
    } catch (error) {
        throw Error((error as Error).message)
    }    
}


export const updateProperty = async (id: string, newData: object) => {
    try {
      const result = await Property.findByIdAndUpdate({ _id: id }, { ...newData })
      return result
    } catch (error) {
        throw Error((error as Error).message)
    }
}
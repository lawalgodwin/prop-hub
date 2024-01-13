import { Router } from 'express'
import PropertyController from '../controllers/PropertyController'

const propertyRouter = Router()

propertyRouter.route('/')
  .post(PropertyController.addNew)
  .get(PropertyController.all)

propertyRouter.route('/:id')
  .get(PropertyController.getPropertById)
  .delete(PropertyController.removePropertyById)
  .patch(PropertyController.updatePropertyById)

export default propertyRouter

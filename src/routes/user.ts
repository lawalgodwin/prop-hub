import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import UserController from '../controllers/UserController'

const userRouter = Router()

userRouter.post('/signup', AuthController.register)
userRouter.post('/login', AuthController.login)
userRouter.get('/logout', AuthController.logout)

userRouter.route('/')
  .get(UserController.all)

export default userRouter

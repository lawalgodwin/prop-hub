import { RequestHandler } from 'express'
import User from '../models/userModel'

class UserController {
    static all: RequestHandler = (req, res, next) => {
        try {
            const users = User.find({ })
            res.status(200).json({ users })
        } catch (error) {
            next((error as Error).message)
        }
    }
}

export default UserController

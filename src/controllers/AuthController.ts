import { RequestHandler } from 'express';
import { createUser } from '../utils/user'
import { UserSignUpType } from '../models/modelTypes'

class AuthController {

      static register: RequestHandler = async (req, res, next) => {
        console.log(req.body)
        const {email, password, firstName, lastName}: UserSignUpType = req.body
        try {
            const newUser = createUser({ email, password, firstName, lastName })
            res.status(201).json({ user: newUser })
        } catch (error) {
            next((error as Error).message)
        }
      }
    
      static login: RequestHandler = async (req, res, next) => {
        try {
            throw new Error('Method not implemented.');
        } catch (error) {
            next((error as Error).message)
        }
    }
      static logout: RequestHandler = async (req, res, next) => {
          try {
            throw new Error('Method not implemented.');
          } catch (error) {
            next((error as Error).message)
          }
      }
    
    }
    
    export default AuthController;
    
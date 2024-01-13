import { Request, Response } from 'express'

import dbClient from '../utils/db'
import redisClient from '../utils/redis'

interface StatusResponseType {
  database: boolean
  redis: boolean
}

class AppController {
  /**
    * get database connectivity status
    */
  static async getStatus (req: Request, res: Response): Promise<Response<StatusResponseType>> {
    const database = await dbClient.isAlive()
    const redis = await redisClient.isAlive()
    return res.status(200).json({ database, redis })
  }

  static getstats (req: Request, res: Response): Response<StatusResponseType> {
    const numberOfUsers = false
    const numberOfProperpies = true
    return res.status(200).json({ numberOfProperpies, numberOfUsers })
  }
}

export default AppController

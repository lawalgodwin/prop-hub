import { Request, Response } from 'express'

import dbClient from '../utils/db'
import redisClient from '../utils/redis'

interface StatusResponseType {
  database: boolean
  redis: boolean
}

/* eslint-disable @typescript-eslint/no-extraneous-class */

class AppController {
  /**
    * get database connectivity status
    */
  static getStatus (req: Request, res: Response): Response<StatusResponseType> {
    const database = dbClient.isAlive()
    const redis = redisClient.isAlive()
    return res.status(200).json({ database, redis })
  }

  static getstats (req: Request, res: Response): Response<StatusResponseType> {
    const numberOfUsers = false
    const numberOfProperpies = true
    return res.status(200).json({ numberOfProperpies, numberOfUsers })
  }
}

export default AppController

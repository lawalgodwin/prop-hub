import { Request, Response } from 'express'

import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
    /**
     * get database connectivity status
     */
    static getStatus(req: Request, res: Response) {
        const database = dbClient.isAlive();
        const redis = redisClient.isAlive();
        res.status(200).json({ database, redis })
    }
}

export default AppController;

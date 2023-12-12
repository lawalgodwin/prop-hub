import { createClient, RedisClientType } from 'redis';


class RedisClient {
    client: RedisClientType;
    isConnected = false;
    constructor() {
        this.client = createClient()
        this.client.connect()
        this.client.on("connect", () => {
            this.isConnected = true
        })
        this.client.on("error", function(err) {
            console.log(`Errro connecting to redis: ${err.message}`)
        })
    }

    isAlive() {
        return this.isConnected
    }
}

const redisClient = new RedisClient();

export default redisClient;

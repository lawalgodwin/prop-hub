import { createClient, RedisClientType } from 'redis'

class RedisClient {
  client: RedisClientType
  isConnected: boolean = false
  constructor () {
    this.client = createClient()
    this.client.connect().then((c) => { return c }).catch((e) => { return e })
    this.client.on('connect', () => {
      this.isConnected = true
    })
    this.client.on('error', function (err: Error) {
      console.log(`Errro connecting to redis: ${err.message}`)
    })
  }

  isAlive (): boolean {
    return this.isConnected
  }
}

const redisClient = new RedisClient()

export default redisClient

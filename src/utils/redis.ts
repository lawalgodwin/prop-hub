import { createClient, RedisClientType } from 'redis';

class RedisClient {
  client: RedisClientType;
  isConnected: boolean = false;

  constructor() {
    this.client = createClient();
    this.establishConnection();
  }

  async establishConnection() {
    try {
      await this.client.connect();
      this.isConnected = true;
    } catch (error) {
      console.error(`Error connecting to Redis: ${(error as Error).message}`);
    }
  }

  async isAlive(): Promise<boolean> {
    return this.isConnected;
  }
}

const redisClient = new RedisClient();

export default redisClient;

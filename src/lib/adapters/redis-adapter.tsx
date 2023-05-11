import { createClient } from "redis"
import { EventEmitter } from "stream"
import { IAdapter } from "./types"

export class RedisAdapter extends EventEmitter implements IAdapter {
  client: ReturnType<typeof createClient>

  constructor() {
    super()
    this.client = createClient({
      url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    })

    this.client.connect().then(() => console.log("Redis connected"))
  }

  async get(key: string): Promise<string | null> {
    const value = await this.client.get(key)
    if (value === null) {
      return null
    }
    return (await this.client.get(key)) as string
  }

  async set<T>(key: string, value: T): Promise<void> {
    await this.client.set(key, JSON.stringify(value))
  }
}

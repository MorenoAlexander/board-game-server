import { RedisAdapter } from "./adapters/redis-adapter"
import { IAdapter } from "./adapters/types"

const STRATEGY = process.env.DB_STRATEGY || "redis"

function InitClient(strategy: string): IAdapter {
  switch (strategy) {
    case "redis":
    default:
      return new RedisAdapter()
  }
}

export const client = InitClient(STRATEGY)

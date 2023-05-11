import { randomUUID } from "crypto"
import { client } from "./client"

export async function NewSessionId(
  gameKey: string,
  initialGameState: any
): Promise<string> {
  const sessionId = randomUUID()

  client.set(`${gameKey}-${sessionId}`, initialGameState)

  return sessionId
}

export async function GetSessionState<T>(
  gameKey: string,
  sessionId: string
): Promise<T | null> {
  const sessionState = await client.get<T>(`${gameKey}-${sessionId}`)
  if (sessionState === null) {
    return null
  }
  return JSON.parse(sessionState) as T
}

export async function SetSessionState<T>(
  gameKey: string,
  sessionId: string,
  state: T
): Promise<void> {
  if (state === undefined) {
    throw new Error("state is undefined")
  }

  const currentState = await client.get<T>(`${gameKey}-${sessionId}`)
  if (currentState === undefined) {
    throw new Error("current state is undefined")
  }

  await client.set(`${gameKey}-${sessionId}`, state)
}

export async function setTestValue<T>(key: string, value: T): Promise<void> {
  await client.set(key, value)
}

export async function getTestValue(key: string): Promise<string> {
  return (await client.get(key)) || ""
}

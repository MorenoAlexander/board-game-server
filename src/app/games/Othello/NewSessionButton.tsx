"use client"

import Button from "@/components/Button"
import { startNewOthelloGame } from "./_actions"

export default function NewSessionButton({
  userSessionId,
}: {
  userSessionId?: string
}) {
  if (userSessionId === undefined) {
    return null
  }
  return (
    <form action={async () => startNewOthelloGame(userSessionId)}>
      <Button type="submit">New Session</Button>
    </form>
  )
}

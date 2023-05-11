import { cookies } from "next/headers"
import NewSessionButton from "./NewSessionButton"

export default async function OthelloPage() {
  const cookieStore = cookies()
  const userSessionId = cookieStore.get("sessionId")
  return (
    <div>
      <h1>Othello</h1>
      <div className="flex felx-row justify-start">
        <NewSessionButton userSessionId={userSessionId?.value} />
      </div>
    </div>
  )
}

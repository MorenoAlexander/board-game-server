import { GetSessionState } from "@/lib/api"
import { OthelloGame } from "@/lib/games/types"
import { redirect } from "next/navigation"

export default async function OthelloGameSession({
  params,
}: {
  params: { session: string }
}) {
  const sessionState = await GetSessionState<OthelloGame>(
    "Othello",
    params.session
  )

  console.log("sessionState", sessionState)

  if (sessionState === null) {
    redirect("/games/Othello")
  }

  return (
    <div>
      <h1>Othello Game Session</h1>
      <p>Session ID: {params.session}</p>
    </div>
  )
}

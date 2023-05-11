"use server"

import { GetSessionState, NewSessionId, SetSessionState } from "@/lib/api"
import { OthelloGame, OthelloGameCell } from "@/lib/games/types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function startNewOthelloGame(userSessionId: string) {
  // first array is rows, second array is columns
  const initialBoardState = Array(8).fill(Array(8).fill(OthelloGameCell.Empty))

  initialBoardState[3][3] = OthelloGameCell.Black
  initialBoardState[3][4] = OthelloGameCell.White
  initialBoardState[4][3] = OthelloGameCell.White
  initialBoardState[4][4] = OthelloGameCell.Black

  const newGameSession = await NewSessionId("Othello", {
    board: initialBoardState,
    turn: 1,
    hostId: userSessionId,
    opponentId: "",
  } as OthelloGame)

  redirect("/games/Othello/" + newGameSession)
}

export async function joinOthelloGame(gameSessionId: string) {
  const cookieStore = cookies()
  const sessionId = cookieStore.get("sessionId")?.value // get users current sessionId

  const gameSession = await GetSessionState<OthelloGame>(
    "Othello",
    gameSessionId
  )

  if (!sessionId || !gameSession) {
    redirect("/games/Othello")
  }

  if (gameSession.hostId === sessionId) {
    return // don't allow host to join their own game
  }

  if (gameSession.opponentId) {
    return // don't allow more than 2 players
  }

  gameSession.opponentId = sessionId

  await SetSessionState("Othello", gameSessionId, gameSession)
}

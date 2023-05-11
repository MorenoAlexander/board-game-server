import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { v4 } from "uuid"

export function middleware(request: NextRequest) {
  let sessionId = request.cookies.get("sessionId")?.value
  console.log("sessionId", sessionId)

  const response = NextResponse.next()
  if (!sessionId) {
    const newSessionId = v4()
    response.cookies.set({
      name: "sessionId",
      value: newSessionId,
      maxAge: 60 * 60, // 1 hour
      path: "/",
    })
  }

  return response
}

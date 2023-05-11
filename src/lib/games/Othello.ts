import { OthelloGame } from "./types"

export function GetOthelloGameCellColor(cell: number) {
  switch (cell) {
    case 0:
      return "white"
    case 1:
      return "black"
    case 2:
      return "white"
  }
}

export function GetOthelloCell(
  board: OthelloGame["board"],
  col: "A" | "B" | "C" | "E" | "F" | "G" | "H",
  row: number
) {
  return board[row][col.charCodeAt(0) - 65]
}

export function SetOthelloCell(
  board: OthelloGame["board"],
  col: "A" | "B" | "C" | "E" | "F" | "G" | "H",
  row: number,
  value: number
) {
  board[row][col.charCodeAt(0) - 65] = value
  return board
}

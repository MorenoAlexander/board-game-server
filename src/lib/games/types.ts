export type OthelloGame = {
  board: number[][]
  turn: number
  hostId: string
  opponentId: string
}

export enum OthelloGameCell {
  Empty = 0,
  Black = 1,
  White = 2,
}

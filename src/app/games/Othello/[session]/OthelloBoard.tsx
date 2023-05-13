/* eslint-disable react/jsx-key */
export default function OthelloBoard({
  boardState,
}: {
  boardState: number[][]
}) {
  return (
    <div className="board">
      {boardState.map((row, i) => (
        <div className="row">
          {row.map((cell, j) => (
            <div className={`bg-${}`} key={`${i}-${j}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

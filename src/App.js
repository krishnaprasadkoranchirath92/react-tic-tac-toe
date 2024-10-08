import { useState } from "react"

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  function handleSquareClick(i) {
    const nextSq = squares.slice();
    
    if (squares[i]) {
      return
    }
      if (xIsNext) {
        nextSq[i] = "X";
      } else {
        nextSq[i] = "O";
      }
      setXIsNext(!xIsNext)
      setSquares(nextSq);
    

  }
  return <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
    </div>
  </>
}
// Declaring a winner -next

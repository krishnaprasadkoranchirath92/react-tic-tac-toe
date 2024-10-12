import { useState } from "react"

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let arr in lines) {
    const [a, b, c] = arr;
    if (sq[a] && sq[a] == sq[b] && sq[b] == sq[c]) {
      return sq[a];
    }
    else {
      return null;
    }
  }
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(squares)
  let stts;
  if (winner) {
    stts = "Winner is : " + winner
  } else {
    stts = "Next Player : " + (xIsNext ? "X" : "O");
  }


  function handleSquareClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSq = squares.slice();
    if (xIsNext) {
      nextSq[i] = "X";
    } else {
      nextSq[i] = "O";
    }
    setXIsNext(!xIsNext)
    setSquares(nextSq);


  }
  return <>
    <div className="status">{stts}</div>
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

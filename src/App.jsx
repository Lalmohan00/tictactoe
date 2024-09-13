import './styles.scss'
import { useState } from 'react'
import Board from './components/Board'
import { CalculateWinner } from './components/CalculateWinner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(false);
    
    const winner = CalculateWinner(squares)
    const nextPlayer = xIsNext? 'X' : '0'
    const statusMassage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

    console.log("winner===",winner)
    
    const handleSquareClick = clickedPosition => {
      if (squares[clickedPosition] || winner) {
          return;
      }
      setSquares(currentSquares => {
          return currentSquares.map((squareValue, position) => {
              if (clickedPosition === position) {
                  return xIsNext ? 'X' : '0';
              }
              return squareValue;
          })
      })

      setXIsNext(currentXisNest => !currentXisNest)

  }

  return (
    <>
    <div className="app">
      <h2> {statusMassage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
    </>
  )
}

export default App

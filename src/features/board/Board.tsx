import { useEffect } from "react";
import { selectDifficulty } from "../difficulty/difficultySlice";
import { createBoard, changeColor, checkAnswer, selectBoardState } from "./boardSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSecretSequence } from "../secretSequence/secretSequenceSlice";
import EndGame from "../../app/EndGame";
import DotButton from "./DotButton";

const Board: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const secretSequence = useAppSelector(selectSecretSequence);
  const { 
    board,
    blacks,
    whites,
    currentRow,
    endGame } = useAppSelector(selectBoardState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createBoard(difficulty))
  }, []);

  return (
    <div className="Board">
      {
        board.map((row, rowIndex) => {
          return (
            <div className={`Row ${currentRow === rowIndex ? `currentRow` : null}`}>
              <div className="UserSequence">
                {
                  row.map((dotValue, dotIndex) => {
                    return (
                      <DotButton
                        dotValue={dotValue}
                        dotIndex={dotIndex}
                        rowIndex={rowIndex} />
                    )
                  })
                }
              </div>
              <div className="CpuBox">
                {
                  blacks[rowIndex] > 0
                    ? [...Array(blacks[rowIndex])].map(item => <span className="cpu dot black"></span>)
                    : null
                }
                {
                  whites[rowIndex] > 0
                    ? [...Array(whites[rowIndex])].map(item => <span className="cpu dot white"></span>)
                    : null
                }
              </div>
            </div>
          )
        })
      }
      {
        endGame
          ? <EndGame />
          : <button className='check-button' 
              onClick={() => dispatch(checkAnswer({ secretSequence }))}>
                Check your Answer
            </button>
      }
    </div>
  )
}

export default Board;
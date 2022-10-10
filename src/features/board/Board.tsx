import { useEffect } from "react";
import { selectDifficulty } from "../difficulty/difficultySlice";
import { selectBoard, createBoard, changeColor, checkAnswer, selectBlacks, selectWhites } from "./boardSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSecretSequence } from "../secretSequence/secretSequenceSlice";

const Board: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const secretSequence = useAppSelector(selectSecretSequence);
  const board = useAppSelector(selectBoard)
  const blacks = useAppSelector(selectBlacks)
  const whites = useAppSelector(selectWhites)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createBoard(difficulty))
  }, []);

  return (
    <div className="Board">
      {
        board.map((row, rowIndex) => {
          return (
            <div className="Row">
              <div className="UserSequence">
                {
                  row.map((dotValue, dotIndex) => {
                    return (
                      <button
                        key={`userDot_${dotIndex}`}
                        className={`user dot color-${dotValue}`}
                        onClick={() => dispatch(changeColor({ rowIndex, dotIndex }))}>
                          {dotValue}
                      </button>
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
      {/* <SecretSequence /> */}
      <button onClick={() => dispatch(checkAnswer({ secretSequence }))}> Check your Answer </button>
    </div>
  )
}

export default Board;
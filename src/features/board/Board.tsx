import { useEffect } from "react";
import { selectDifficulty } from "../difficulty/difficultySlice";
import { createBoard, resetBoard, selectBoardState } from "./boardSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import DotButton from "./DotButton";

const Board: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const { 
    board,
    blacks,
    whites,
    currentRow } = useAppSelector(selectBoardState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetBoard());
    dispatch(createBoard(difficulty));
  }, []);

  return (
    <div className="Board">
        {
          board.map((row, rowIndex) => {
            return (
              <div className={`Row ${currentRow === rowIndex ? `currentRow` : null}`}
                key={`row_${rowIndex}`}>
                <div className="UserSequence">
                  {
                    row.map((dotValue, dotIndex) => {
                      return (
                        <DotButton
                          key={`userDot_${dotIndex}`}
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
                    ? [...Array(blacks[rowIndex])].map((item, i) => <span key={`black_${i}`} className="cpu dot black"></span>)
                    : null
                  }
                  {
                    whites[rowIndex] > 0
                      ? [...Array(whites[rowIndex])].map((item, i) => <span key={`white_${i}`} className="cpu dot white"></span>)
                      : null
                  }
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Board;
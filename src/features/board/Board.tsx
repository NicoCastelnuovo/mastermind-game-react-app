import { useEffect } from "react";
import { selectDifficulty, selectDifficultyColumn } from "../difficulty/difficultySlice";
import { selectBoard, createBoard } from "./boardSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Board: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const board = useAppSelector(selectBoard)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createBoard(difficulty))
  }, []);

  console.log(board)

  return (
    <div className="Board">
      {
        board.map((item, i) => {
          return (
            <div>CONTENT</div>
          )
        })
      }
      {/* <SecretSequence /> */}
    </div>
  )
}

export default Board;

    // <div className="Row">
    //   <div className="UserSequence">
    //     {
    //       row.map((item, i) => {
    //         return (
    //           <button key={`userDot_${i}`} 
    //             className={`user dot color-${row[i]}`}
    //             onClick={() => dispatch(increment(i))}> 
    //               {row[i]}
    //           </button>
    //         )
    //       })
    //     }
    //   </div>
    //   <div className="CpuBox">
    //     <span className="cpu dot"></span>
    //     <span className="cpu dot"></span>
    //     <span className="cpu dot"></span>
    //     <span className="cpu dot"></span>
    //   </div>
    // </div>
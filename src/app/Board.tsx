import { selectDifficulty, selectDifficultyColumn } from "../features/difficulty/difficultySlice";
import { selectBoard, createBoard } from "../features/board/boardSlice";
import Row from "../features/row/Row";
import { useAppDispatch, useAppSelector } from "./hooks";

const Board: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const board = useAppSelector(selectBoard)
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // generate the board based on the difficulty state
  //   // dispatch(createBoard(difficulty))
  // }, []);

  console.log(board)

  return (
    <div className="Board">
      {
        // place for the boardState
      }
      {/* <SecretSequence /> */}
    </div>
  )
}

export default Board;
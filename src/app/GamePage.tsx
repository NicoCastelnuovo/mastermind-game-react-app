import { useEffect } from "react";
import { selectDifficultyRow } from "../features/difficulty/difficultySlice";
import { createNewSequence, selectSecretSequence } from "../features/secretSequence/secretSequenceSlice";
import Board from "../features/board/Board";
import { useAppDispatch, useAppSelector } from "./hooks";
import EndGame from "./EndGame";
import { checkAnswer, selectBoardState } from "../features/board/boardSlice";

const GamePage: React.FC = () => {
  const difficultyRow = useAppSelector(selectDifficultyRow);
  const secretSequence = useAppSelector(selectSecretSequence);
  const { endGame } = useAppSelector(selectBoardState);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(createNewSequence(difficultyRow))
  }, [])

  return (
    <main className="GamePage">
      <Board />
      {
        endGame
          ? <EndGame />
          : <button className='check-button' 
              onClick={() => dispatch(checkAnswer({ secretSequence }))}>
                Check your Answer
            </button>
      }
    </main>
  )
}

export default GamePage;
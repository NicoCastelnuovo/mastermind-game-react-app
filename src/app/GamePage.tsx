import { useEffect } from "react";
import { selectDifficultyRow } from "../features/difficulty/difficultySlice";
import { createNewSequence, selectSecretSequence } from "../features/secretSequence/secretSequenceSlice";
import Board from "../features/board/Board";
import { useAppDispatch, useAppSelector } from "./hooks";

const GamePage: React.FC = () => {
  const difficultyRow = useAppSelector(selectDifficultyRow);
  const secretSequence = useAppSelector(selectSecretSequence)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(createNewSequence(difficultyRow))
  }, [])

  return (
    <main className="GamePage">
      <div>
        { secretSequence.map(item => item) } {/* Erase the secret sequence */}
      </div>
      <Board />
    </main>
  )
}

export default GamePage;
import { useEffect } from "react";
import { selectDifficulty } from "../features/difficulty/difficultySlice";
import { createNewSequence, selectSecretSequence } from "../features/secretSequence/secretSequenceSlice";
import Board from "./Board";
import { useAppDispatch, useAppSelector } from "./hooks";
import Messages from "./Messages";

const GamePage: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty);
  const secretSequence = useAppSelector(selectSecretSequence)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(createNewSequence(difficulty))
  }, [])

  return (
    <main className="GamePage">
      <div>
        {
          secretSequence.map(item => item)
        }
      </div>
      <Board />
      <Messages /> 
    </main>
  )
}

export default GamePage;
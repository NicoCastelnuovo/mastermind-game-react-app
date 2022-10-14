import { selectVictory, resetBoard, createBoard } from "../features/board/boardSlice";
import { createNewSequence, selectSecretSequence } from "../features/secretSequence/secretSequenceSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { Link } from "react-router-dom";
import { selectDifficulty, selectDifficultyRow } from "../features/difficulty/difficultySlice";
import SecretSequence from "../features/secretSequence/SecretSequence";

const EndGame = () => {
  const victory = useAppSelector(selectVictory)
  const secretSequence = useAppSelector(selectSecretSequence);
  const difficulty = useAppSelector(selectDifficulty);
  const difficultyRow = useAppSelector(selectDifficultyRow);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetBoard());
    dispatch(createNewSequence(difficultyRow));
    dispatch(createBoard(difficulty));
  }

  return (
    <div className='EndGame'>
      <div className='SecretSequence'>
        <p>Secret code was</p>
        <SecretSequence secretSequence={secretSequence} />
      </div>
      {
        victory === true
          ? <h2>Yeah! You Guessed!</h2> 
          : <h2>Whoops! You lost!</h2>
      }
      <button
        className="restart-button"
        onClick={() => handleClick()}>
          Restart
      </button>
      <Link 
        className="menu-button"
        to={'/'}>
          Menu
      </Link>
    </div>
  )
};

export default EndGame;
import { selectVictory } from "../features/board/boardSlice";
import DotButton from "../features/board/DotButton";
import { selectSecretSequence } from "../features/secretSequence/secretSequenceSlice";
import { useAppSelector } from "./hooks";

const EndGame = () => {
  const victory = useAppSelector(selectVictory)
  const secretSequence = useAppSelector(selectSecretSequence);

  return (
    <div className='EndGame'>
      <div className='SecretSequence'>
        <p>Secret code was</p>
        {
          secretSequence.map((dotValue, dotIndex) => {
            return (
              <DotButton
                dotValue={dotValue}
                dotIndex={dotIndex} />
            )
          })
        }
      </div>
      {
        victory === true
          ? <>
              <h2>Yeah!</h2>
              <h3>You Guessed!</h3>
            </> 
          : <>
              <h2>Whoops!</h2>
              <h2>You lost!</h2>
            </>
      }
    </div>
  )
};

export default EndGame;
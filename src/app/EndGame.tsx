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
                key={`secretDot_${dotIndex}`}
                dotValue={dotValue}
                dotIndex={dotIndex} />
            )
          })
        }
      </div>
      {
        victory === true
          ? <h2>Yeah! You Guessed!</h2> 
          : <h2>Whoops! You lost!</h2>
      }
      <button className='restart-button'>Restart</button>
      <button className='menu-button'>Menu</button>
    </div>
  )
};

export default EndGame;
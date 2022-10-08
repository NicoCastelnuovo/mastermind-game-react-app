import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, selectDifficulty } from "./difficultySlice";

const Difficulty = () => {
  const difficulty = useAppSelector(selectDifficulty);
  const dispatch = useAppDispatch();

  return (
    <div className='Difficulty'>
      <button
        value='decrement'
        onClick={() => dispatch(decrement())}> - </button>
      <div>{difficulty}</div>
      <button
        value='increment'
        onClick={() => dispatch(increment())}> + </button>
    </div>
  )
};

export default Difficulty;
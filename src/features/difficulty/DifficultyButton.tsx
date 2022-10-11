import { useAppDispatch } from "../../app/hooks";
import { increment, decrement } from "./difficultySlice";

const DifficultyButton = ({ direction, difficulty }: { 
  direction: string;
  difficulty: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`${direction}Length`}>
      <button
        className='difficulty-button'
        onClick={() => dispatch(decrement(direction))}>-</button>
      {difficulty}
      <button
        className='difficulty-button'
        onClick={() => dispatch(increment(direction))}>+</button>
    </div>
  )
};

export default DifficultyButton;
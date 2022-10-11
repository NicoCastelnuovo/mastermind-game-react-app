import { useAppSelector } from "../../app/hooks";
import DifficultyButton from "./DifficultyButton";
import { selectDifficultyRow, selectDifficultyColumn } from "./difficultySlice";

const Difficulty = () => {
  const difficultyRow = useAppSelector(selectDifficultyRow);
  const difficultyColumn = useAppSelector(selectDifficultyColumn)

  return (
    <div className='Difficulty'>
      <DifficultyButton
        direction='Row'
        difficulty={difficultyRow} />
      <DifficultyButton
        direction='Column'
        difficulty={difficultyColumn} />
    </div>
  )
};

export default Difficulty;
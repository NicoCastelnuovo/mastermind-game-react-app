import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { 
  decrementRow, 
  incrementRow,
  decrementColumn,
  incrementColumn,
  selectDifficultyRow, 
  selectDifficultyColumn } from "./difficultySlice";

const Difficulty = () => {
  const difficultyRow = useAppSelector(selectDifficultyRow);
  const difficultyColumn = useAppSelector(selectDifficultyColumn)
  const dispatch = useAppDispatch();

  return (
    <div className='Difficulty'>
      <div className='RowLength'>
        <button
          value='decrement'
          onClick={() => dispatch(decrementRow())}> - </button>
        <div>{difficultyRow}</div>
        <button
          value='increment'
          onClick={() => dispatch(incrementRow())}> + </button>
      </div>
      <div className='ColumnLength'>
        <button
            value='decrement'
            onClick={() => dispatch(decrementColumn())}> - </button>
        <div>{difficultyColumn}</div>
        <button
          value='increment'
          onClick={() => dispatch(incrementColumn())}> + </button>
      </div>
    </div>
  )
};

export default Difficulty;
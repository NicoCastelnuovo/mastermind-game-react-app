import { useEffect } from "react";
import { selectDifficultyRow } from "../difficulty/difficultySlice";
import { createRow, increment, selectRow } from "./rowSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Row: React.FC = () => {
  const difficultyRow = useAppSelector(selectDifficultyRow)
  const row = useAppSelector(selectRow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createRow(difficultyRow));
  }, [])
  
  return (
    <div className="Row">
      <div className="UserSequence">
        {
          row.map((item, i) => {
            return (
              <button key={`userDot_${i}`} 
                className={`user dot color-${row[i]}`}
                onClick={() => dispatch(increment(i))}> 
                  {row[i]}
              </button>
            )
          })
        }
      </div>
      <div className="CpuBox">
        <span className="cpu dot"></span>
        <span className="cpu dot"></span>
        <span className="cpu dot"></span>
        <span className="cpu dot"></span>
      </div>
    </div>
  )
};

export default Row;
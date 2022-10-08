import { useEffect } from "react";
import { selectDifficulty } from "../difficulty/difficultySlice";
import { createRow, increment, selectRow } from "./rowSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Row: React.FC = () => {
  const difficulty = useAppSelector(selectDifficulty)
  const row = useAppSelector(selectRow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createRow(difficulty));
  }, [])
  
  return (
    <div className="Row">
      <div className="UserSequence">
        {
          row.map((item, i) => {
            return (
              <button key={`userDot_${i}`} 
                className='user dot'
                onClick={() => dispatch(increment(i))}> 
                  0 
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
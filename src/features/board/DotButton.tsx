import { useAppDispatch } from "../../app/hooks";
import { changeColor } from "./boardSlice";


const DotButton = ({ dotIndex, dotValue, rowIndex }: {
  dotIndex: number;
  dotValue: number;
  rowIndex?: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    typeof rowIndex === 'number'
      ? <button className={`user dot color-${dotValue}`}
          onClick={() => dispatch(changeColor({ rowIndex, dotIndex }))}>
        </button>
      : <button className={`user dot color-${dotValue}`}>
        </button>
  )
}

export default DotButton;
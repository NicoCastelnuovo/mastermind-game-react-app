import DotButton from "../board/DotButton";

const SecretSequence = ({ secretSequence }: {
  secretSequence: number[];
}) => {
  return (
    <>
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
    </>
  )
};

export default SecretSequence;
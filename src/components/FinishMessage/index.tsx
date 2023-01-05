import ActionButton from "../Buttons/ActionButton";
import { useGameLogic } from "../useGameLogic";

interface FinishMessageProps {
  message: string;
}

const FinishMessage = ({ message }: FinishMessageProps) => {
  const { onResetGame } = useGameLogic();

  return (
    <div>
      {message}
      <ActionButton text="Jogar novamente" onClick={onResetGame} />
    </div>
  );
};

export default FinishMessage;

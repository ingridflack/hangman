import ActionButton from "../Buttons/ActionButton";

interface FinishMessageProps {
  message: string;
  onResetGame: any;
}

const FinishMessage = ({ message, onResetGame }: FinishMessageProps) => {
  return (
    <div>
      {message}
      <ActionButton text="Jogar novamente" onClick={onResetGame} />
    </div>
  );
};

export default FinishMessage;

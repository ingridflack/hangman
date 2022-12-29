import * as S from "./styles";
import { LETTER_STATE } from "./styles";

const LETTER_OPTIONS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

interface KeyboardProps {
  attempts: string[];
  onClick: (letter: string) => void;
  word?: string;
}

const Keyboard = ({ word, attempts, onClick }: KeyboardProps) => {
  const getLetterState = (letter: string): keyof typeof LETTER_STATE => {
    const hasBeenAttempted = attempts.includes(letter);
    const isInWord = word?.split("").includes(letter);

    if (!hasBeenAttempted)
      return LETTER_STATE.DEFAULT as keyof typeof LETTER_STATE;

    if (hasBeenAttempted && isInWord)
      return LETTER_STATE.POSITIVE as keyof typeof LETTER_STATE;

    return LETTER_STATE.NEGATIVE as keyof typeof LETTER_STATE;
  };

  return (
    <S.KeyboardContainer>
      {LETTER_OPTIONS.map((row, index) => (
        <S.Row key={index}>
          {row.map((letter) => {
            return (
              <S.LetterButton
                onClick={() => onClick(letter)}
                key={letter}
                state={getLetterState(letter)}
              >
                {letter}
              </S.LetterButton>
            );
          })}
        </S.Row>
      ))}
    </S.KeyboardContainer>
  );
};

export default Keyboard;

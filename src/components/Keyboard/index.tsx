import * as S from "./styles";

const LETTER_OPTIONS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

interface KeyboardProps {
  attempts: string[];
  onClick: (letter: string) => void;
}

const Keyboard = ({ attempts, onClick }: KeyboardProps) => {
  return (
    <S.KeyboardContainer>
      {LETTER_OPTIONS.map((row, index) => (
        <S.Row key={index}>
          {row.map((letter) => (
            <S.LetterButton onClick={() => onClick(letter)} key={letter}>
              {letter}
            </S.LetterButton>
          ))}
        </S.Row>
      ))}
    </S.KeyboardContainer>
  );
};

export default Keyboard;

import LetterButton from "../Buttons/LetterButton";

import * as S from "./styles";

const LETTER_OPTIONS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const Keyboard = () => {
  return (
    <S.KeyboardContainer>
      {LETTER_OPTIONS.map((row, index) => (
        <S.Row key={index}>
          {row.map((item) => (
            <LetterButton key={item}>{item}</LetterButton>
          ))}
        </S.Row>
      ))}
    </S.KeyboardContainer>
  );
};

export default Keyboard;

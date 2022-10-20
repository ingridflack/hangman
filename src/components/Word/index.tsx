import * as S from "./styles";

interface WordProps {
  word?: string;
  attempts: string[];
}

const Word = ({ word, attempts }: WordProps) => {
  return (
    <S.WordContainer>
      {word?.split("").map((letter, index) => {
        const abc = attempts
          .map((s) => s.toLocaleLowerCase())
          .includes(letter.toLocaleLowerCase());

        return (
          <S.Letter key={`${letter}-${index}`}>{abc ? letter : " "}</S.Letter>
        );
      })}
    </S.WordContainer>
  );
};

export default Word;

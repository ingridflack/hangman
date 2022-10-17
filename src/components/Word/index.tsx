import * as S from "./styles";

interface WordProps {
  word?: string;
}

const Word = ({ word }: WordProps) => {
  console.log(word);
  return (
    <S.WordContainer>
      {word?.split("").map((letter, index) => (
        <S.Letter key={`${letter}-${index}`}>{letter}</S.Letter>
      ))}
    </S.WordContainer>
  );
};

export default Word;

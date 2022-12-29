import * as S from "./styles";

interface WordProps {
  word?: string;
  normalizedWord?: string;
  attempts: string[];
}

const Word = ({ word, normalizedWord, attempts }: WordProps) => {
  if (!word || !normalizedWord) return null;

  return (
    <S.WordContainer>
      {word.split("").map((letter, index) => {
        const hasBeenAttempted = attempts.includes(normalizedWord[index]);

        return (
          <S.Letter key={`${letter}-${index}`}>
            {hasBeenAttempted ? letter : " "}
          </S.Letter>
        );
      })}
    </S.WordContainer>
  );
};

export default Word;

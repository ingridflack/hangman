import { Children } from "react";
import * as S from "./styles";

interface LetterButtonProps {
  children: string;
}

const LetterButton = ({ children }: LetterButtonProps) => {
  return <S.LetterButtonContainer>{children}</S.LetterButtonContainer>;
};

export default LetterButton;

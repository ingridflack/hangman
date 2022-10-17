import { FaGlasses, FaKiwiBird, FaAppleAlt, FaMapSigns } from "react-icons/fa";
import ActionButton from "../Buttons/ActionButton";

import * as S from "./styles";
const Categories = ({ onClick }: any) => {
  return (
    <S.CategoriesContainer>
      <S.Title>Select a category:</S.Title>
      <S.ButtonsContainer>
        <ActionButton
          text="Animals"
          icon={FaKiwiBird}
          onClick={onClick("animals")}
        />
        <ActionButton
          text="Fruits"
          icon={FaAppleAlt}
          onClick={onClick("fruits")}
        />
        <ActionButton
          text="Objects"
          icon={FaGlasses}
          onClick={onClick("objects")}
        />
        <ActionButton
          text="Countries"
          icon={FaMapSigns}
          onClick={onClick("countries")}
        />
      </S.ButtonsContainer>
    </S.CategoriesContainer>
  );
};

export default Categories;

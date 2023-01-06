import { FaGlasses, FaKiwiBird, FaAppleAlt, FaMapSigns } from "react-icons/fa";
import ActionButton from "../Buttons/ActionButton";

import * as S from "./styles";
const Categories = ({ onClick }: any) => {
  return (
    <S.CategoriesContainer>
      <S.Title>Selecione a categoria:</S.Title>
      <S.ButtonsContainer>
        <ActionButton
          text="Animal"
          icon={FaKiwiBird}
          onClick={onClick("animal")}
        />
        <ActionButton
          text="Fruta"
          icon={FaAppleAlt}
          onClick={onClick("fruta")}
        />
        <ActionButton
          text="Objeto"
          icon={FaGlasses}
          onClick={onClick("objeto")}
        />
        <ActionButton text="País" icon={FaMapSigns} onClick={onClick("país")} />
      </S.ButtonsContainer>
    </S.CategoriesContainer>
  );
};

export default Categories;

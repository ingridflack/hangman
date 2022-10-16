import * as S from "./styles";

const Gallows = () => {
  return (
    <S.Container>
      <S.TopStructure>
        <S.Rope>
          <S.Character>
            <S.Head />

            <S.Body />

            <S.Arm left />
            <S.Arm />

            <S.Leg left />
            <S.Leg />
          </S.Character>
        </S.Rope>
      </S.TopStructure>
      <S.Structure />
    </S.Container>
  );
};

export default Gallows;

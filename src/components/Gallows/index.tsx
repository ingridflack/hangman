import * as S from "./styles";

const body = [
  <S.Body />,
  <S.Arm left />,
  <S.Arm />,
  <S.Leg left />,
  <S.Leg />,
  <S.Head />,
];

const Gallows = ({ wrongAttempts }: any) => {
  return (
    <S.Container>
      <S.TopStructure>
        <S.Rope>
          <S.Character>
            {body.slice(0, wrongAttempts).map((element) => element)}
          </S.Character>
        </S.Rope>
      </S.TopStructure>
      <S.Structure />
    </S.Container>
  );
};

export default Gallows;

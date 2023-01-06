import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
`;

export const Structure = styled.div`
  height: 220px;
  width: 2px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 40px;

  &::before {
    width: 80px;
    background: black;
    height: 2px;
    bottom: 0;
    position: absolute;
    left: 50%;
    content: "";
    transform: translateX(-50%);
  }
`;

export const TopStructure = styled.div`
  background-color: black;
  content: "";
  position: absolute;
  top: 0;
  width: 100px;
  height: 2px;
  left: 40px;
`;

export const Rope = styled.div`
  height: 40px;
  position: absolute;
  top: -0;
  right: 0;
  background-color: black;
  width: 2px;
`;

export const Character = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
`;

export const Head = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid black;

  &::after,
  &::before {
    position: absolute;
    top: 10px;
    content: "x";
    font-size: 10px;
    color: black;
    font-weight: 700;
  }

  &::before {
    left: 10px;
  }

  &::after {
    right: 10px;
  }
`;

export const Body = styled.div`
  width: 3px;
  height: 40px;
  background-color: black;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const Limb = styled.div<{ left?: boolean }>`
  width: 3px;
  background-color: black;
  position: absolute;
  transform: ${({ left }) => `rotate(${left ? "40deg" : "-40deg"})`};
`;

export const Leg = styled(Limb)`
  height: 35px;
  top: 75px;
  left: ${({ left }) => (left ? "7px" : "30px")};
`;

export const Arm = styled(Limb)`
  height: 25px;
  top: 45px;
  left: ${({ left }) => (left ? "10px" : "27px")};
`;

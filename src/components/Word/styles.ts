import styled from "styled-components";

export const WordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Letter = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;

  & + & {
    margin-left: 8px;
  }
`;

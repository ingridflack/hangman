import styled from "styled-components";

export const WordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Letter = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid black;

  & + & {
    margin-left: 8px;
  }
`;

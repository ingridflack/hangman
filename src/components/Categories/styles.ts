import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  button + button {
    margin-left: 16px;
  }
`;

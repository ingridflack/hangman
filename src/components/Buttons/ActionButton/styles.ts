import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #ccc;
  transition: background-color 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 4px;
  }

  &:hover,
  &:focus {
    background-color: #c3c3c3;
  }
`;

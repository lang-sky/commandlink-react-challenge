import styled from "styled-components";

export const Label = styled.label<{ $required?: boolean }>`
  margin-bottom: 5px;
  display: block;
  ${({ $required }) =>
    $required &&
    `
      &:after {
        content: " *";
        color: red;
      }
  `}
`;

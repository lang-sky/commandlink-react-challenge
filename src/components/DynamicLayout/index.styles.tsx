import { sizes } from "constants/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div<{ $cols?: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ $cols = 1 }) => `repeat(${$cols}, 1fr)`};
  @media screen and (max-width: ${sizes.breakpoint.md}) {
    display: block;
  }
`;

export const Col = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div<{ $cols?: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ $cols = 1 }) => `repeat(${$cols}, 1fr)`};
`;

export const Col = styled.div`
  width: 100%;
`;

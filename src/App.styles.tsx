import { sizes } from "constants/styles";
import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
  @media screen and (max-width: ${sizes.breakpoint.md}) {
    margin: 0;
  }
`;

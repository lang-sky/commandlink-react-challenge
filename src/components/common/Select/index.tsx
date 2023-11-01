import { FC, SelectHTMLAttributes } from "react";
import * as Styled from "./index.styles";

export const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return <Styled.Select {...props} />;
};

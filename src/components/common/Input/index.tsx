import { FC, InputHTMLAttributes } from "react";
import * as Styled from "./index.styles";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <Styled.Input {...props} />;
};

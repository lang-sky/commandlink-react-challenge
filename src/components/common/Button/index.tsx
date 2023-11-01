import { ButtonHTMLAttributes, FC } from "react";
import * as Styled from "./index.styles";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Styled.Button {...props} />;
};

import { FC, HTMLProps } from "react";
import * as Styled from "./index.styles";

interface InputProps {
  props?: HTMLProps<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ props }) => {
  return <Styled.Input {...props} />;
};

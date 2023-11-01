import { FC, HTMLProps } from "react";
import * as Styled from "./index.styles";

interface InputProps {
  props?: HTMLProps<HTMLSelectElement>;
}

export const Select: FC<InputProps> = ({ props }) => {
  return <Styled.Select {...props} />;
};

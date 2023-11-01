import { FC, HTMLProps } from "react";
import * as Styled from "./index.styles";

interface InputProps {
  props?: HTMLProps<HTMLLabelElement>;
}

export const Label: FC<InputProps> = ({ props }) => {
  return <Styled.Label {...props} />;
};

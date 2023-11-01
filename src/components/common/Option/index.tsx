import { FC, HTMLProps } from "react";
import * as Styled from "./index.styles";

interface InputProps {
  props?: HTMLProps<HTMLOptionElement>;
}

export const Option: FC<InputProps> = ({ props }) => {
  return <Styled.Option {...props} />;
};

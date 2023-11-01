import { FC, OptionHTMLAttributes } from "react";
import * as Styled from "./index.styles";

export const Option: FC<OptionHTMLAttributes<HTMLOptionElement>> = (props) => {
  return <Styled.Option {...props} />;
};

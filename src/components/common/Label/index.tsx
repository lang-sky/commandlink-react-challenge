import { FC, LabelHTMLAttributes } from "react";
import * as Styled from "./index.styles";

export const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return <Styled.Label {...props} />;
};

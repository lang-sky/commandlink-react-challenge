import { FC, LabelHTMLAttributes } from "react";
import * as Styled from "./index.styles";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & { $required?: boolean };

export const Label: FC<LabelProps> = (props) => {
  return <Styled.Label {...props} />;
};

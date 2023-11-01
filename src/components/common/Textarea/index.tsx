import { FC, TextareaHTMLAttributes } from "react";
import * as Styled from "./index.styles";

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <Styled.Textarea {...props} />;
};

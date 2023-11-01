import { FC, HTMLProps, ReactNode } from "react";
import * as Styled from "./index.styles";

interface CardProps {
  children: ReactNode;
  props?: HTMLProps<HTMLDivElement>;
}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <Styled.Container {...props}>{children}</Styled.Container>;
};

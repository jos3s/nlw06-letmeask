import { ReactNode } from "react";
import * as Styled from "./styles";

type BadgeProps={
  children:ReactNode,
  type:"info" | "error" | "warning", 
}

export const Badge = ( {children, type}:BadgeProps) => {
  return (
    <Styled.Container className={type}>
      {children}
    </Styled.Container>
  );
};

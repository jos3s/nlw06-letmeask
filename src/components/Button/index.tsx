import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <Styled.Button {...props}>{props.children}</Styled.Button>
  )
}

import { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType:'fill' | 'outline',
  btnG?:boolean,
}

export const Button = (props: ButtonProps) => {
  return (
    <Styled.Button 
      {...props} 
      btnType={props.btnType} 
      btnG={props?.btnG || false}
    >
      {props.children}
      </Styled.Button>
  )
}

import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  return <Styled.Input {...props} />
}


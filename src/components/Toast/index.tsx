import { ReactNode } from 'react';
import * as Styled from './styles';
import { MdInfo,MdWarning,MdError} from "react-icons/md";

type ToastTypes = {
  children: ReactNode,
  type:"info" | "error" | "warning",
}

export const Toast = (props: ToastTypes) => {
  return (
    <Styled.Alert className={props.type}>
      <p> 
        {props.type==="info" && <MdInfo size={"2.4rem"}/>}
        {props.type==="warning" && <MdWarning size={"2.4rem"}/>}
        {props.type==="error" && <MdError size={"2.4rem"}/>}
        {props.children}
      </p>
    </Styled.Alert>
  )
}

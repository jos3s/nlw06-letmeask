import styled from "styled-components";

type ButtonProps={
  btnType:'fill' | 'outline',
  btnG:boolean,
}

export const Button = styled.button<ButtonProps>`
  margin-top:${({ theme }) => theme.spacings.sm};
  height: 5rem;
  border-radius:${({ theme }) => theme.borderRadius.md};
  font-weight:500;

  border:${({btnType, theme }) => btnType!=="fill"? theme.colors.purple.light +" solid .2rem " : 0} ;
  background:${({btnG, btnType, theme }) => (
    btnType==="fill"
    ? (btnG ? theme.colors.google : theme.colors.purple.light )
    : ("transparent")) };

  color:${({ theme, btnType,btnG }) => (
    btnType==="fill"
    ?  (theme.colors.white.light )
    : (theme.isLight ? theme.colors.white.light : theme.colors.purple.light)
  )};
  width:100%;
  padding:0 ${({ theme }) => theme.spacings.xl};

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;
  transition:all 0.2s;

  &> img{
    margin-right:${({ theme }) => theme.spacings.xsm};
  }

  &:not(:disabled):hover{
    filter:brightness(0.9);
  }

  &:disabled{
    opacity:0.6;
    cursor:not-allowed;
  }
`;
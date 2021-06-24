import styled from "styled-components";

export const Input = styled.input`
  height:50px;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  padding:0 ${({ theme }) => theme.spacings.md};
  background-color:${({ theme }) =>  theme.colors.bg.input };
  color:${({ theme }) => theme.colors.textColor.input};
  border: ${({ theme }) =>theme.isLight ? theme.colors.gray.medium +" .1em solid" : "none"};
  width:100%;
  box-shadow: 0 1px 8px  ${({ theme }) => theme.isLight? "rgb(0,0,0,0)" :"rgba(24,24,24,20%)" } ;

  &:focus{
    outline:none;
    border:.1rem solid ${({ theme }) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
  }
`;


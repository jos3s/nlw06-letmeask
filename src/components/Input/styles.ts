import styled from "styled-components";

export const Input = styled.input`
  height:50px;
  border-radius:${({ theme }) => theme.borderRadius.md};
  padding:0 ${({ theme }) => theme.spacings.md};
  background-color:${({ theme }) =>  theme.colors.bg.input };
  color:${({ theme }) => theme.colors.textColor.input};
  border: ${({ theme }) =>theme.isLight ? theme.colors.gray.medium +" .1em solid" : "none"};
  width:100%;

  &:focus{
    outline:none;
    border:.1rem solid ${({ theme }) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
  }
`;


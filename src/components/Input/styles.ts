import styled from "styled-components";

export const Input = styled.input`
height:50px;
border-radius:${({ theme }) => theme.borderRadius.md};
padding:0 ${({ theme }) => theme.spacings.md};
background-color:transparent;
color:${({ theme }) => theme.title === "light" ? theme.colors.purple.light : theme.colors.white.light};
border:1px solid ${({ theme }) => theme.colors.gray.medium};
width:100%;

&:focus{
  outline:none;
  border-color:${({ theme }) => theme.title === "light" ? theme.colors.purple.light : theme.colors.white.light};
}
`;


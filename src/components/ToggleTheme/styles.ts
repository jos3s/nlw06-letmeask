import styled from "styled-components";

export const Button =styled.button`
  display:flex;
  align-items:center;
  justify-content:center;

  background:transparent;
  margin:0;
  border:none;
  color:${({ theme }) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light}
`;
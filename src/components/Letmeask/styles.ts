import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  color:${({ theme })=>theme.isLight ?  theme.colors.black: theme.colors.white.light};
`;


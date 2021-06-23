import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  color:${({ theme })=>theme.title==="dark" ? theme.colors.white.light : theme.colors.black};
`;


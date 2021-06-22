import styled from "styled-components";

export const Container = styled.div`
  color:${({ theme })=>theme.title==="dark" ? theme.colors.white.light : theme.colors.black};
`;


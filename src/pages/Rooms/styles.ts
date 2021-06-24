import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  max-width:min(80em, 70%);
  margin:5rem auto 3rem;
  display:flex;
  gap:3rem;
`;

export const Title = styled.div`
  display:flex;
  align-items:center;
  margin: 0 0 ${({ theme })=>theme.spacings.lg};

  >h1{
    font-family:${({ theme })=>theme.font.primary};
    font-size:${({ theme })=>theme.font.sizes.xl};
    color:${({ theme }) => theme.colors.textColor.primary};
  }
`;

export const Left = styled.div`
  flex:2;

  >h1{
    font-family:${({ theme })=>theme.font.primary};
    font-size:${({ theme })=>theme.font.sizes.xl};
    color:${({ theme }) => theme.colors.textColor.primary};
  }

  >span{
    font-size:${({ theme })=>theme.font.sizes.sm};
    color:${({ theme }) => theme.colors.white.light};
    padding:${({ theme })=>theme.spacings.xsm} ${({ theme })=>theme.spacings.md};
    border-radius:9999px;
    font-weight:500px;
    background:${({theme})=>theme.colors.pink.medium};
    margin-left:${({ theme }) => theme.spacings.sm};
  }
`;

export const Right = styled.div``;

export const Cards = styled.div`
  position:sticky;
  top: 1em;
  display:flex;
  flex-direction:column;
  flex-shrink:1;
  gap:2rem;
`;

export const Questions = styled.div`
  margin-top:${({ theme })=>theme.spacings.xl}
`;

export const Rooms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 20px;

`;

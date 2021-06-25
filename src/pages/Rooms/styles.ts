import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  max-width:min(80em, 70%);
  margin:5rem auto 3rem;
  display:flex;
  gap:3rem;

  @media screen and (max-width:50rem){
    flex-direction:column-reverse;
  }
`;

export const Title = styled.div`
  display:flex;
  align-items:center;
  margin: 0 0 ${({ theme })=>theme.spacings.lg};
  justify-content:space-between;

  >h1{
    font-family:${({ theme })=>theme.font.primary};
    font-size:${({ theme })=>theme.font.sizes.xl};
    color:${({ theme }) => theme.colors.textColor.primary};
  }
  >button{
    width:18rem;
    margin-top:0;
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
  gap:2rem;

  @media screen and (max-width:60rem){
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(12rem, 1fr));
    gap:1.2rem;
  }
`;

export const Questions = styled.div`
  margin-top:${({ theme })=>theme.spacings.xl}
`;

export const Rooms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 20px;

`;

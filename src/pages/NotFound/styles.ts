import styled from "styled-components";
import {Container as ToastContainer} from "../../components/Toast/styles";

export const Container = styled.div`
  width:100vw;
  overflow:hidden;
  ${ToastContainer}{
    &.noAnimation{
      top:15rem;
    }
  }
`;

export const Main = styled.div`
  max-width:min(80em, 70%);
  margin:5rem auto 3rem;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:2rem;

  svg{
    height:40rem;
    width: 100%;
  }

  @media (max-width:70rem){
    flex-direction:column;
    margin-top:15rem;
    grid-template-columns:1fr;
  }
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

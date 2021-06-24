import styled from "styled-components";
import {Button as ButtonContainer} from "../../components/Button/styles"
import {Button as ToggleThemeContainer} from "../../components/ToggleTheme/styles"

export const Container = styled.div`
`;

export const Header = styled.div`
  padding:${({ theme })=>theme.spacings.lg};
  border-bottom:1px solid ${({ theme })=>theme.isLight  ?  theme.colors.gray.light :theme.colors.black};

  > div{
    max-width:120rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

`;

export const Tools = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;

  > button{
    height:4rem;
    margin:0;
  }

  ${ButtonContainer}{
    width: 18rem;
  }
  ${ToggleThemeContainer}{
    font-size:3rem;
  }
`;

export const Main = styled.div`
  max-width:min(80em, 70%);
  margin:5rem auto 3rem;
  display:flex;
  gap:3rem;
`;

/* export const User = styled.div`
  display:flex;
  align-items:center;
  gap:1.2rem;

  > img {
    width:${({ theme }) => theme.spacings.xl};
    height:${({ theme }) => theme.spacings.xl};
    border-radius:50%;
  }
`;

export const UserData = styled.div`
  display:flex;
  flex-direction:column;
  gap:.3rem;
  font-weight:500;
  font-size:${({ theme})=>theme.font.sizes.sm};
  color:${({ theme }) => theme.colors.textColor.details};

  &>span:nth-child(2){
    font-size:1.2rem;
    font-weight: 400;
  }
`; */

export const Title = styled.div`
  display:flex;
  align-items:center;
  margin: 0 0 ${({ theme })=>theme.spacings.lg};

  >h1{
    font-family:${({ theme })=>theme.font.primary};
    font-size:${({ theme })=>theme.font.sizes.lg};
    color:${({ theme }) => theme.colors.textColor.primary};
  }
`;

export const Left = styled.div`
  flex:2;

  >h1{
    font-family:${({ theme })=>theme.font.primary};
    font-size:${({ theme })=>theme.font.sizes.lg};
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

export const Right = styled.div`
`;

export const Cards = styled.div`
  position:sticky;
  top: 1em;
  display:flex;
  flex-direction:column;
  flex-shrink:1;
  gap:2rem;
`;

export const Questions = styled.div`
`;

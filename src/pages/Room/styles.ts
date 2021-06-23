import styled from "styled-components";
import {Container as Letmeask} from "../../components/Letmeask/styles"
import {Button as ButtonContainer} from "../../components/Button/styles"

export const Container = styled.div`

`;

export const Header = styled.div`
  padding:${({ theme })=>theme.spacings.lg};
  border-bottom:1px solid ${({ theme })=>theme.title ==="dark" ? theme.colors.black: theme.colors.gray.light};

  > div{
    max-width:120rem;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    > ${Letmeask}{
      width:45px;
    }
  }
`;

export const Main = styled.div`
  max-width:800px;
  margin:0 auto;

  > form{
    >textarea {
      width:100%;
      border:0;
      padding:${({ theme })=>theme.spacings.md};
      border-radius:${({ theme })=>  theme.borderRadius.md};
      background:${({ theme }) =>  theme.title ==="dark" ? theme.colors.bg.input : theme.colors.white.light};
      box-shadow: 0 .2rem 1.2rem rgba(0,0,0,0.04);
      resize:vertical;
      min-height:130px;
    }
  }
`;

export const FormFooter = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:${({ theme })=>theme.spacings.md};

    > span {
    font-weight:500;
    color:${({ theme }) => theme.colors.gray.dark};
    font-size:${({ theme })=>theme.font.sizes.sm};
    
      > button {
        font-weight:500;
        background:transparent;
        font-size:${({ theme })=>theme.font.sizes.sm};
        text-decoration:underline;
        color:${({ theme }) => theme.colors.purple.light};
        border:0;
        cursor:pointer;
      }
    }

    > ${ButtonContainer}{
      width:40%;
      margin-top:0;
    }
`;


export const Title = styled.div`
  display:flex;
  align-items:center;
  margin: ${({ theme })=>theme.spacings.xl} 0 ${({ theme })=>theme.spacings.lg};

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


export const User = styled.div`
  display:flex;
  align-items:center;
  gap:.8rem;

  > img {
    width:${({ theme }) => theme.spacings.xl};
    height:${({ theme }) => theme.spacings.xl};
    border-radius:50%;
  }
  >span{
    font-weight:500;
    font-size:${({ theme})=>theme.font.sizes.sm};
    color:${({ theme }) => theme.colors.textColor.details};
  }

`;

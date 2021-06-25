import styled from "styled-components";
import {Button as ButtonContainer} from "../../components/Button/styles"
import {Container as ToastContainer} from "../../components/Toast/styles"

export const Container = styled.div`
  ${ToastContainer}{
    &.noAnimation{
      top:auto;
      bottom: 4rem;
    }
  }
`;

export const Main = styled.div`
  max-width:min(80em, 70%);
  margin:5rem auto 3rem;
  display:flex;
  flex-direction:row;
  gap:3rem;
  
  @media screen and (max-width:50rem){
    flex-direction:column-reverse;
  }
`;

export const Form = styled.form`
  >textarea {
    width:100%;
    border:0;
    padding:${({ theme })=>theme.spacings.md};
    border-radius:0 ${({ theme })=>  theme.borderRadius.md} ${({ theme })=>  theme.borderRadius.md};
    background:${({ theme }) =>  theme.colors.bg.input};
    color:${({ theme }) => theme.colors.textColor.primary};
    box-shadow: 0 0.1rem 0.4rem  ${({ theme }) => theme.isLight ? "rgba(0,0,0,20%)" : "rgba(24,24,24,20%)" } ;
    resize:vertical;
    min-height:13rem;
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

    @media screen and (max-width:50rem){
      flex-direction:column;
      align-items:flex-start;
      justify-content:flex-start;
      gap:1rem;

      > ${ButtonContainer}{
        width:100%;
        margin-top:0;
      }
    }
`;

export const User = styled.div`
  display:flex;
  align-items:center;
  gap:1.2rem;

  > img {
    width:4.6rem;
    height:4.6rem;
    border-radius:50%;
  }
`;

export const UserData = styled.div`
  display:flex;
  flex-direction:column;
  gap:.5rem;
  font-weight:500;
  font-size:${({ theme})=>theme.font.sizes.sm};
  color:${({ theme }) => theme.colors.textColor.details};

  &>span:nth-child(2){
    font-size:1.4rem;
    font-weight: 400;
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
  margin-top:${({ theme })=>theme.spacings.xl};
`;

export const Filter = styled.div`
  display:flex;
  gap:1.2rem;
  align-items:center;
  margin:2rem 0;
  color:${({ theme }) => theme.colors.textColor.details};

   >select{
    background:${({ theme })=>theme.colors.bg.input};
    color:${({ theme })=>theme.colors.textColor.primary};
    margin:0;
    padding:.7rem 1rem;
    border:1px solid ${({ theme }) => theme.colors.gray.dark};
    border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
    outline:none;
  }
`;

export const NotQuestions = styled.div`
  color:${({ theme })=>theme.colors.textColor.primary};
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2rem;
  h3{
    font-size:${({ theme })=>theme.font.sizes.lg};
  }
`;

export const Img = styled.img`
  margin-top:${({ theme })=>theme.spacings.xl};
  height: 20rem;
  width: 20rem;
`;

export const Logout = styled.button`
  background:transparent;
  border:none;
  color:${({ theme })=>theme.colors.danger};
  width:5rem;
  padding:0;
  font-size:${({ theme })=>theme.font.sizes.xsm};
  cursor:pointer;

  &:hover{
    opacity:0.9;
  }
`;

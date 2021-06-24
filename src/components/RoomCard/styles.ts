import styled from "styled-components";

export const Container=styled.div`
  background:${({ theme }) => theme.colors.bg.input } ;
  border-radius:0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 0.1rem 0.4rem  ${({ theme }) => theme.isLight ? "rgba(0,0,0,20%)" : "rgba(24,24,24,20%)" } ;
  padding:2.4rem;
  
  color: ${({ theme }) => theme.colors.textColor.primary };

  a{
    text-decoration:none;
    color: ${({ theme }) => theme.colors.textColor.primary };
    transition:all 0.2s;

    :hover{
      color:${({ theme }) => theme.colors.purple.light };
    } 
  }

  footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:2.4rem;
  }
`;

export const Buttons=styled.div``;

export const Title=styled.h3`
  font-weight:500;
  font-family:${({ theme })=>theme.font.primary};  
`;
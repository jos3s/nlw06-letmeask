import styled from "styled-components";

export const Container=styled.div`
  display:flex;
  align-items:center;
  justify-content:center; 
  font-size:${({ theme }) => theme.font.sizes.sm};
  text-decoration:none;
  background: ${({theme})=> theme.colors.textColor.details};
  padding: ${({ theme }) => theme.spacings.sm};
  border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  color: white;
  
  &.info{
    background-color: ${({ theme }) => theme.colors.purple.light};
  }

  &.warning{
    background-color: #FFA000;
  }

  &.error{
    background-color: ${({ theme}) => theme.colors.danger};
  }
  
`;
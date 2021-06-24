import styled from "styled-components";

type ContainerProps={
  btnStyle?:"fill"| "outline" | "primary",
}


export const Text=styled.h4`
  margin-top:${({theme})=>theme.spacings.xsm};
  text-transform:capitalize;
`;

export const Data=styled.h3`
  font-size:${({theme}) => theme.font.sizes.xl};
`;

export const Container=styled.div<ContainerProps>`
  background:${({theme, btnStyle})=> btnStyle==="primary"  
  ? theme.colors.pink.medium 
  : btnStyle === "fill" ? theme.colors.bg.input 
  : "transparent"};

  color:${({theme, btnStyle})=> btnStyle==="primary"  
  ? theme.colors.white.light
  : theme.colors.textColor.primary};

  border: ${({theme, btnStyle})=> btnStyle === "outline" 
  ? theme.colors.textColor.primary +" .2rem solid"
  : "none" };
  max-width: 12.5rem;
  border-radius: 0 ${({theme})=> theme.borderRadius.md} ${({theme})=> theme.borderRadius.md};
  padding: ${({theme})=>theme.spacings.lg};
  box-shadow: 0 0.1rem 0.4rem  ${({ theme }) => theme.isLight ? "rgba(0,0,0,20%)" : "rgba(24,24,24,20%)" } ;
`;


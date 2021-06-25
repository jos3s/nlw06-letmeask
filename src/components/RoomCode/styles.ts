import styled from "styled-components";

export const Button = styled.button`
  width:100%;
  height:4rem;
  border-radius:0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;

  background:transparent;
  border: ${({ theme }) => theme.isLight ? theme.colors.purple.light :theme.colors.purple.dark} 0.1rem solid;
  cursor:pointer;

  display: flex;
`;

export const Icon = styled.div`
  background:${({ theme }) => theme.isLight ? theme.colors.purple.light :theme.colors.purple.dark};
  padding: 0 1.2rem;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Text = styled.span`
  padding: 0 1.2rem;
  display:block;
  flex:1;
  color: ${({ theme }) => theme.colors.textColor.primary};
  align-self: center;
  padding:0 ${({ theme }) => theme.spacings.md} 0 12px;
  max-width:23.5rem;
  font-size:${({ theme }) => theme.font.sizes.sm};
  font-weight:500;

  @media(max-width:70rem){
    display:none;
  }
`;

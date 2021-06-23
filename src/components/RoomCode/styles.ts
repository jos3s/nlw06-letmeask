import styled from "styled-components";
import { Container as ToastContainer} from "./../Toast/styles";

export const Container = styled.button`
  background:transparent;
  border:none;

  > ${ToastContainer}{
    top:12rem;
  }
`;

export const Button = styled.button`
  height:4rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;

  background:${({ theme }) => theme.colors.bg.body};
  border: ${({ theme }) => theme.colors.purple.light} 0.1rem solid;
  cursor:pointer;

  display: flex;
`;

export const Icon = styled.div`
  background:${({ theme }) => theme.colors.purple.light};
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
  color: ${({ theme }) => theme.title ==="dark" ? theme.colors.textColor.primary : theme.colors.textColor.primary};
  align-self: center;
  padding:0 ${({ theme }) => theme.spacings.md} 0 12px;
  width:23rem;
  font-size:${({ theme }) => theme.font.sizes.sm};
  font-weight:500;
`;

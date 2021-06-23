import styled, {keyframes} from "styled-components";

const FadeIn = keyframes`
  from {
    right: -3em; 
    opacity: 0;
  }
  to {
    right: 0; 
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    right: 0; 
    opacity: 1;
  }
  to {
    right: -3em; 
    opacity: 0;
  }
`;

export const Container = styled.div`
  font-weight:500;
  color:${({ theme }) => theme.colors.white.light};
  min-width: 250px; 
  background-color: ${({ theme, className }) => className ==="info" ? theme.colors.purple.light : className ==="error" ? theme.colors.danger : "#FFA000"};
  color: #fff; 
  text-align: center; 
  border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 ${({ theme }) => theme.borderRadius.md}; /* Rounded borders */
  padding: 16px; 
  position: fixed; 
  z-index: 3; 
  right: 0; 
  top: 30px; 
  animation: ${FadeIn} 0.5s, ${FadeOut} .5s 1s;
  animation-fill-mode: none, forwards;

  p{
    display:flex;
    align-items: center;
    gap:10px;
    opacity:0.9;
  }
`;


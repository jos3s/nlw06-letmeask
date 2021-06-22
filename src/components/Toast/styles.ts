import styled from "styled-components";

export const Alert = styled.div`
  font-weight:500;
  color:${({ theme }) => theme.colors.white.light};
  min-width: 250px; 
  background-color: ${({ theme, className }) => className ==="info" ? theme.colors.purple.light : className ==="error" ? theme.colors.danger : "#FFC107"};
  color: #fff; 
  text-align: center; 
  border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 ${({ theme }) => theme.borderRadius.md}; /* Rounded borders */
  padding: 16px; 
  position: fixed; 
  z-index: 1; 
  right: 0; 
  top: 30px; 

  p{
    display:flex;
    align-items: center;
    gap:10px;
    opacity:0.9;
  }
`;
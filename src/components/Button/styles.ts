import styled from "styled-components";

export const Button = styled.button`
  margin-top:${({ theme }) => theme.spacings.sm};
  height: 5rem;
  border-radius:${({ theme }) => theme.borderRadius.md};
  border:0;
  font-weight:500;
  background:${({ theme }) => theme.colors.purple.light};
  color:${({ theme }) => theme.colors.white.medium};
  width:100%;
  padding:0 ${({ theme }) => theme.spacings.xl};

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;
  transition:all 0.2s;

  &> img{
    margin-right:${({ theme }) => theme.spacings.xsm};
  }

  &:not(:disabled):hover{
    filter:brightness(0.9);
  }

  &:disabled{
    opacity:0.6;
    cursor:not-allowed;
  }
`;
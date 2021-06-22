import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    font-size:62.5%;
    scroll-behavior:smooth;
    background:${({ theme }) => theme.colors.bg.body}
  }
  body, input, button, textarea{
    font:400 ${({ theme }) => theme.font.sizes.md} ${({ theme }) => theme.font.secondary};
  }
`;
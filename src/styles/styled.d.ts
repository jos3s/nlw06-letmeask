import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isLight:boolean,
    colors: {
      bg: {
        body: string,
        modal: string,
        input:string,
      },
      textColor: {
        primary: string,
        details: string,
        input:string,
      },
      black: string,
      shadow: string,
      purple: {
        light: string,
        dark: string,
      },
      google:string,
      danger: string,
      gray: {
        dark: string,
        medium: string,
        light: string,
      },
      white: {
        medium: string,
        light: string,
      },
      pink: {
        medium: string,
        light: string,
      }
    },
    font: {
      primary: string,
      secondary: string,
      sizes: {
        xsm: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
      }
    },
    borderRadius: {
      sm: string,
      md: string,
    },
    spacings: {
      xsm: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
    }
  }
}
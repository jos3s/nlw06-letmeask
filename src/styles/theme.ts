import { DefaultTheme } from 'styled-components';

const styles = {
  font: {
    primary: "'Poppins', sans-serif;",
    secondary: "'Roboto', sans-serif;",
    sizes: {
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2.4rem',
      xl: '3.6rem',
      xxl: '6.4rem',
    }
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
  },
  spacings: {
    xsm: '.8rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.6rem',
    xxl: '6.4rem'
  }
}

export const light: DefaultTheme = {
  isLight: true,
  colors: {
    bg: {
      body: "#F8F8F8",
      modal: "#F8F8F8",
      input:"#F8F8F8",
    },
    textColor: {
      primary: "#29292E",
      details: "#737380",
      input:"#835AFD",
    },
    black: "#29292E",
    shadow: "#050206",
    purple: {
      light: "#835AFD",
      dark: "#835afd99",
    },
    google:'#EA4335',
    danger: "#E73F5D",
    gray: {
      dark: "#737380",
      medium: "#A8A8B3",
      light: "#DBDCDD",
    },
    white: {
      medium: "#F8F8F8",
      light: "#FEFEFE",
    },
    pink: {
      medium: "#E559F9",
      light: "#D67EE2",
    }
  },
  ...styles,
}


export const dark: DefaultTheme = {
  isLight:false,
  colors: {
    bg: {
      body: "#0e1027 ",
      modal: "#29292E",
      input:"#030518",
    },
    textColor: {
      primary: "#FEFEFE",
      details: "#F8F8F8",
      input:"#FEFEFE",
    },
    black: "#29292E",
    shadow: "#050206",
    purple: {
      light: "#835AFD",
      dark: "#835afd99",
    },
    google:'#EA4335',
    danger: "#E73F5D",
    gray: {
      dark: "#737380",
      medium: "#A8A8B3",
      light: "#DBDCDD",
    },
    white: {
      medium: "#F8F8F8",
      light: "#FEFEFE",
    },
    pink: {
      medium: "#E559F9",
      light: "#D67EE2",
    }
  },
  ...styles,
}


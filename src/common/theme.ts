import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f50b5',
    },
    secondary: {
      main: '#f44336',
    },
    // ... other palette options
  },
  typography: {
    fontFamily: '"Geologica", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: "-1.2px",
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: "-0.8px",
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: "-0.4px",
    },
    // ... other typography options
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Example color for dark theme
    },
    secondary: {
      main: '#03dac6', // Example color for dark theme
    },
    // ... other palette options
  },
  typography: {
    fontFamily: '"Geologica", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: "-1.2px",
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: "-0.8px",
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: "-0.4px",
    },
    // ... other typography options
  },

});

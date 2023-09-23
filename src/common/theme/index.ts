import { createTheme } from '@mui/material';
import {
    Grid,
    styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#ffffff",
        },
        primary: {
            main: '#3f2b96',
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
            letterSpacing: "-1.4px",
        },
        h2: {
            fontSize: '2.25rem',
            letterSpacing: "-1px",
        },
        h3: {
            fontSize: '2rem',
            letterSpacing: "-0.6px",
        },
        h4: {
            fontSize: '1.75rem',
            letterSpacing: "-0.6px",
        },
        h5: {
            fontSize: '1.5rem',
            letterSpacing: "-0.6px",
        },
        h6: {
            fontSize: '1.25rem',
            letterSpacing: "-0.6px",
        },
        body1: {
            fontSize: '1rem',
            letterSpacing: "-0.6px",
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#121212",
        },
        primary: {
            main: '#3f2b96', // Example color for dark theme
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
            letterSpacing: "-1.4px",
        },
        h2: {
            fontSize: '2.25rem',
            letterSpacing: "-1px",
        },
        h3: {
            fontSize: '2rem',
            letterSpacing: "-0.6px",
        },
        h4: {
            fontSize: '1.75rem',
            letterSpacing: "-0.6px",
        },
        h5: {
            fontSize: '1.5rem',
            letterSpacing: "-0.6px",
        },
        h6: {
            fontSize: '1.25rem',
            letterSpacing: "-0.6px",
        },
        body1: {
            fontSize: '1rem',
            letterSpacing: "-0.6px",
        }
    },
});

export const CustomContainer = styled(Grid)(({ theme }) => ({
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    minHeight: '100vh',
    padding: theme.spacing(10, 10),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(10, 5),
    },
    h1: {
        [theme.breakpoints.down('md')]: {
            fontSize: '22px',
        },
    },
    h2: {
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
    },
    h3: {
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        },
    },
    h4: {
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    h5: {
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
    },
    h6: {
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
    },
    body1: {
        [theme.breakpoints.down('md')]: {
            fontSize: '10px',
        },
    },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
    display: "flex",
    textDecoration: "none",
    color: theme.palette.text.primary,
}));
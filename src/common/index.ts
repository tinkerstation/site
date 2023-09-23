import { createTheme } from '@mui/material';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import {
  Grid,
  styled
} from '@mui/material';

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


export function convertPathString(str: string): string {
    // Remove any prefix before and including the dot (e.g., "pages.")
    str = str.split('.').pop() || '';
    // Convert camelCase to kebab-case
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export const LocalStorage = {
    get(key: string): string | null {
        const item = localStorage.getItem(key);
        // console.log("get",key)
        if (item) {
            return JSON.parse(item) as string;
        }
        return null;
    },
    getBool(key: string): boolean | null {
        const item = localStorage.getItem(key);
        // console.log("getBool:",key)
        if (item) {
            // console.log("Leave getBool",JSON.parse(item))
            return JSON.parse(item) as boolean;
        }
        return null;
    },
    setBool(key: string, value: boolean) {
        // console.log("setBool:",key,value)
        localStorage.setItem(key, JSON.stringify(value));
    },
    set(key: string, value: string) {
        // console.log("set",key,value)
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
};

export interface Language {
    code: string;
    name: string;
}

export const languages: Language[] = [
    { code: 'en-US', name: 'english' },
    { code: 'fr-FR', name: 'french' },
    { code: 'es-ES', name: 'spanish' },
    { code: 'de-DE', name: 'german' },
    // ... add more languages as needed
];

export const languageDictionary: Record<string, any> = {
    'en-US': en,
    'fr-FR': fr,
    'es-ES': es,
    'de-DE': de,
    // ... add more languages as needed
};

export function getTranslation(langCode: string, key: string) {
    const languageData = languageDictionary[langCode];
    if (!languageData) {
        console.warn(`No translations found for language code: ${langCode}`);
        return key;
    }
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let current = languageData;

    for (const k of keys) {
        current = current[k];
        if (!current) {
            console.warn(`No translation found for key: ${key}`);
            return key;
        }
    }
    return current;
}

export const CustomContainer = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.background.default,
  minHeight: '100vh',
  padding: theme.spacing(10,20),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10,3),
  },
}));
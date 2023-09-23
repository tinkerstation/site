// src/ThemeContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme,LocalStorage } from '..';

type ThemeContextType = {
    darkMode: boolean;
    toggleTheme: () => void;
};
type ThemeProviderProps = {
    children: ReactNode;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    return context;
};

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return LocalStorage.getBool('theme') ? true : false;
    });

    React.useEffect(() => {
        LocalStorage.setBool('theme', darkMode);
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
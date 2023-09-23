import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { LocalStorage } from '..';

type ConsentContextProviderProps = {
    children: ReactNode;
}
type ConsentContextType = {
    Consent: boolean;
    toggleConsent: (consent: string) => void;
}
export const ConsentContext = createContext({} as ConsentContextType);

export const useConsentContext = () => {
    const context = useContext(ConsentContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

export function ConsentContextProvider(props: ConsentContextProviderProps) {
    const [currentConsent, setCurrentConsent] = useState<boolean>(LocalStorage.getBool('use_cookies') || false);

    useEffect(() => {
        setCurrentConsent(currentConsent);
    }
    , [currentConsent])

    function toggleConsent(consent: string) {
        if (consent==="allow"){
            setCurrentConsent(true);
            LocalStorage.setBool('use_cookies', true);
        }else{
            setCurrentConsent(!currentConsent);
        }
    }

    return (
        <ConsentContext.Provider value={{ Consent: currentConsent , toggleConsent }}>
            {props.children}
        </ConsentContext.Provider>
    )
}
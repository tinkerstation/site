import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { LocalStorage } from '../storage';
import { Language, languages } from '../language';

type LanguageContextProviderProps = {
    children: ReactNode;
}


type LanguageContextType = {
    Language: Language;
    toggleLanguage: (LanguageCode: string) => void;
}
export const LanguageContext = createContext({} as LanguageContextType);

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageContextProvider');
    }
    return context;
};

export function LanguageContextProvider(props: LanguageContextProviderProps) {
    const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
        return LocalStorage.get('language') ?? languages[0].code
    });

    useEffect(() => {
        setCurrentLanguage(currentLanguage);
        LocalStorage.set('language', currentLanguage);
    }
    , [currentLanguage])

    function toggleLanguage(LanguageCode: string) {
        setCurrentLanguage(LanguageCode);
    }
    const languageName = languages.find(lang => lang.code === currentLanguage)?.name || "";

    return (
        <LanguageContext.Provider value={{ Language: { code: currentLanguage, name: languageName }, toggleLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}
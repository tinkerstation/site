import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';

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
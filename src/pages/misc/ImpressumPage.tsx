import React from 'react';
import { Typography, Paper } from '@mui/material';
import { getTranslation } from '../../common/language';
import { useLanguageContext } from '../../common/contexts/LangContext';

const Impressum: React.FC = () => {
    const { Language } = useLanguageContext();

    return (
        <Paper elevation={3} style={{ padding: '20px', textAlign: "justify" }}>
            <Typography variant="h2" gutterBottom>
                {getTranslation(Language.code, 'impressum.title')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.companyName')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.address')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.phone')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.email')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.managingDirector')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.commercialRegister')}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {getTranslation(Language.code, 'impressum.vatId')}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {getTranslation(Language.code, 'impressum.responsibleContent')}
            </Typography>
        </Paper>
    );
}

export default Impressum;
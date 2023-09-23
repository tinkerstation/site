import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { getTranslation } from '../../common';
import { useLanguageContext } from '../../common/contexts/LangContext';

const Impressum: React.FC = () => {
    const { Language } = useLanguageContext();

    return (
        <Container component="main" maxWidth="md" >
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    {getTranslation(Language.code, 'impressum.title')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'impressum.companyName')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.address')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.phone')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.email')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.managingDirector')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.commercialRegister')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.vatId')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'impressum.responsibleContent')}
                </Typography>
            </Paper>
        </Container>
    );
}

export default Impressum;
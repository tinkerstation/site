// TermsAndConditions.tsx
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { getTranslation } from '../../common';
import { useLanguageContext } from '../../common/contexts/LangContext';

const TermsAndConditions: React.FC = () => {
    const { Language } = useLanguageContext();

    return (
        <Container component="main" maxWidth="md" style={{ padding: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px'  ,textAlign: "justify"}}>
                <Typography variant="h3" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.title')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.acceptance')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.acceptanceText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.serviceProvision')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.serviceProvisionText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.payment')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.paymentText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.limitation')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.limitationText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.intellectualProperty')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.intellectualPropertyText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.termination')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.terminationText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.changes')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.changesText')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.governingLaw')}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.contactUs')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {getTranslation(Language.code, 'termsAndConditions.contactUsText')}
                </Typography>
            </Paper>
        </Container>
    );
}

export default TermsAndConditions;

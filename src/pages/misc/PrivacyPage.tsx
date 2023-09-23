// PrivacyPolicy.tsx
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { getTranslation } from '../../common';
import { useLanguageContext } from '../../common/contexts/LangContext';

const PrivacyPolicy: React.FC = () => {
    const { Language } = useLanguageContext();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.title')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.introduction')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.introText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.googleAnalytics')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.googleAnalyticsText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.googleAdSense')}
        </Typography>
        <Typography variant="body1" gutterBottom>
        {getTranslation(Language.code, 'privacyPolicy.googleAdSenseText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.cookies')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.cookiesText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.localStorage')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.localStorageText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.changes')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.changesText')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.contactUs')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {getTranslation(Language.code, 'privacyPolicy.contactUsText')}
        </Typography>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy;

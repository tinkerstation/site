import React from 'react';
import {
    Typography,
    Box
} from '@mui/material';
import {  getTranslation } from '../../common/language';
import { useLanguageContext } from '../../common/contexts/LangContext';
import { NavBar } from '../../components/NavBar';
import { CustomContainer } from '../../common/theme';

const HomePage: React.FC = () => {
    const { Language } = useLanguageContext();
    return (
        <React.Fragment>
            <NavBar isHome />
            <Box className="background-logo">
            <img src={"/logo.png"} />
            </Box>
            <Box className="video-container">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src={"/intro.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
            <CustomContainer>
                <Typography variant="h1">{getTranslation(Language.code, "welcome")}</Typography>
            </CustomContainer>
        </React.Fragment>
    );
};

export default HomePage;

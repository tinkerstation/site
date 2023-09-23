import React from 'react';
import {
    Typography,
    Container
} from '@mui/material';
import background from "/homedesign.jpg";
import { getTranslation } from '../../common';
import { useLanguageContext } from '../../common/contexts/LangContext';



const HomePage: React.FC = () => {
    const { Language } = useLanguageContext();
    return (
        <React.Fragment>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    backgroundSize: 'cover',
                    width: "100vw",
                    height: "60vh",
                }}
            >
            </div>
            <Container component="main" maxWidth="md" style={{padding: "20px"}}>
                <Typography variant="h1">{getTranslation(Language.code,"welcome")}</Typography>
            </Container>
        </React.Fragment>
    );
};

export default HomePage;

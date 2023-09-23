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
            {/* <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: "100vw",
                    height: "100vh",
                }}
            >
            </div> */}
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={"/intro.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Other content can go here */}
            </div>
            <Container component="main" maxWidth="xl" style={{ padding: "20px" }}>
                <Typography variant="h1">{getTranslation(Language.code, "welcome")}</Typography>
            </Container>
        </React.Fragment>
    );
};

export default HomePage;

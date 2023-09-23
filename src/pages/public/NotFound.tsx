import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <main>
              
                <Button onClickCapture={() => navigate("/")} >go Home</Button>
            </main>
        </React.Fragment>
    );
};

export default NotFoundPage;
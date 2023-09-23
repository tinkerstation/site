import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Paper elevation={3} style={{
                minHeight: "50vh",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Button onClickCapture={() => navigate("/")} style={{ color: "inherit" }} >go Home</Button>
            </Paper>
        </React.Fragment>
    );
};

export default NotFoundPage;
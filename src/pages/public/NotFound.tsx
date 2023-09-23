import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Container component="main" maxWidth="md" style={{ padding: '100px 0px' }}>
                <Paper elevation={3} style={{ 
                    padding: '20px',
                    minHeight:"40vh",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <Button  onClickCapture={() => navigate("/")} >go Home</Button>
                </Paper>
            </Container>
        </React.Fragment>
    );
};

export default NotFoundPage;
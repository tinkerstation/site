import React from 'react';
import {
    styled,
    Grid
} from '@mui/material';
import { NavBar } from '../../common/components/NavBar';
import background from "/homedesign.jpg";
import { Outlet } from 'react-router-dom';


const Container = styled(Grid)(({ theme }) => ({
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    minHeight: "100vh",
}));

const PublicLayout: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
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
            <Container>
                <Outlet />
            </Container>
        </React.Fragment>
    );
};

export default PublicLayout;

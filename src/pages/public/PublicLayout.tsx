import React from 'react';
import { NavBar } from '../../common/components/NavBar';
import { Outlet } from 'react-router-dom';
import {
    Grid,
    styled
} from '@mui/material';

const CustomContainer = styled(Grid)(({ theme }) => ({
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    minHeight: '100vh',
}));

const PublicLayout: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <CustomContainer >
                <Outlet />
            </CustomContainer>
        </React.Fragment>
    );
};

export default PublicLayout;

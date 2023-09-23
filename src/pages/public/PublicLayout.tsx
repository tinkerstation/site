import React from 'react';
import { NavBar } from '../../common/components/NavBar';
import { Outlet } from 'react-router-dom';
import { CustomContainer } from '../../common';

const PublicLayout: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <CustomContainer>
                <Outlet />
            </CustomContainer>
        </React.Fragment>
    );
};

export default PublicLayout;

import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import  PublicLayout  from './public/PublicLayout';
import  NotFoundPage  from './public/NotFound';
const HomePage = lazy(() => import("./public/HomePage"));

export const AppRouter = () => {

    return (
        <React.Fragment>
            <Routes >
                <Route element={<PublicLayout />}>
                     <Route  path="/home" element={<HomePage />} />
                     <Route  path="/" element={<HomePage />} />
                     <Route  path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}
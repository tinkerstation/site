import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import PublicLayout from './public/PublicLayout';
import NotFoundPage from './public/NotFound';
const HomePage = lazy(() => import("./public/HomePage"));
const ImpressumPage = lazy(() => import('./misc/ImpressumPage'));
const PrivacyPage = lazy(() => import('./misc/PrivacyPage'));
const TermsPage = lazy(() => import('./misc/TermsPage'));

export const AppRouter = () => {

    return (
        <React.Fragment>
            <Routes >
                <Route element={<PublicLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/impressum" element={<ImpressumPage />} />
                    <Route path="/terms-and-conditions" element={<TermsPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const RootLayout = () => {
    return (
        <div>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
            {/* Your code here */}
        </div>
    );
};

export default RootLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';

const EventLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default EventLayout;
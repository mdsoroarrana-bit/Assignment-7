import React from 'react';
import Navber from '../../navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
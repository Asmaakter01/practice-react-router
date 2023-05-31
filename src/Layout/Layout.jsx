import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Layout;
import React from 'react';
import Navbar from '../page/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] border-blue-700 sticky top-0 z-10'>
                <Navbar></Navbar>
            </div>
            <div className='bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
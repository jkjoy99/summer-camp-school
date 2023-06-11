import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           { noHeaderFooter || <NavBar></NavBar>}
            <Outlet/>
           { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;
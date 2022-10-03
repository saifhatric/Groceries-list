import React from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
    return (
        <div>
            <div className="navbar">
                <Header />
                <Nav />
            </div>
            <div className='pages'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default SharedLayout;
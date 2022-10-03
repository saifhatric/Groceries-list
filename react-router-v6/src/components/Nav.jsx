import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className='link'> Home</Link>
            <Link to="/about" className='link'> About</Link>
            <Link to="/register" className='link'> Register</Link>
            <Link to="/login" className='link'> Login</Link>
        </nav>
    )
}

export default Nav;
import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
    return (
        <div className="Header">
            <Navbar />
            <Sidebar />
        </div>
    )
} 

export default Header;
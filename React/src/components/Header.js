import React, {useState} from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
    const [name, setName] = useState('');

    const getName = (newName) => {
        setName(newName);
    }

    return (
        <div className="Header">
            <Navbar name={name} />
            <Sidebar getName={getName} />
        </div>
    )
} 

export default Header;
import React from 'react';
import logo from '../../images/logo-small.png'
import './Header.css';
const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="" />
        </div>
    );
};

export default Header;
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ title }) => {
    const { pathname } = useLocation();

    const path = pathname.split('/');
    const locationTop = path.length > 1 && path[1] ? path[2] : 'top';

    const handleTitleDisplay = title ? title : locationTop;

    return (
        <header className="header">
            <p className="header-title">{handleTitleDisplay}</p>
        </header>
    )
};

export default Header;
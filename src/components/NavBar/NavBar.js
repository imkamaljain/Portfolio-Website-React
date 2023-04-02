import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { config } from '../../assets/config';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate(),
        location = useLocation(),
        navBarRef = useRef(null),
        navLinkRef = useRef([]),
        toggleNavBar = () => {
            let navBarClassList = navBarRef.current.classList;
            navBarClassList.contains('show') ? navBarClassList.remove('show') : navBarClassList.add('show');
        },
        handleNavigation = (navRoute) => {
            toggleNavBar();
            navigate(navRoute);
        };
    useEffect(() => {
        const navLinkIdx = ['/', '/about', '/experience', '/education', '/skills', '/contact'].indexOf(location.pathname) || 0;
        navLinkRef.current.forEach(x => x.classList.remove('active'));
        navLinkRef.current[navLinkIdx].classList.add('active');
    }, [location]);
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav_toggle" id="nav-toggle" onClick={toggleNavBar}>
                    <i className="bx bx-menu"></i>
                </div>
                <div>
                    <a className="nav_logo" onClick={() => navigate('/')}><i className='bx bxs-home'></i></a>
                </div>
                <div className="nav_menu" id="nav-menu" ref={navBarRef}>
                    <div className="nav_close" id="nav-close" onClick={toggleNavBar}>
                        <i className="bx bx-x"></i>
                    </div>
                    <ul className="nav_list">
                        {config.navBar.map((item, idx) => (
                            <li className="nav_item" key={idx}>
                                <a className="nav_link" ref={el => (navLinkRef.current[idx] = el)} onClick={() => handleNavigation(`/${idx > 0 ? item : ''}`)}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
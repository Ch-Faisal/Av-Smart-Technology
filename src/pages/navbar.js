import React, { useState } from 'react';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    
  return (
<div>
<nav className="navbar navbar-expand-lg pt-4 pb-4">
    <div className="container">
        <img src="assets/logo.png" alt="Logo" width="200" />
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span className="navbar-toggler-icon"></span>
</button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleNavClick('Home')} aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')} href="#">ABOUT</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${activeLink === 'products' ? 'active' : ''}`} onClick={() => handleNavClick('products')} href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRODUCTS
                        </a>
                        <ul className="dropdown-menu main-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown" data-bs-toggle="dropdown" aria-expanded="false"><span>Multimedia Projectors</span></a>
                            <ul className="dropdown-menu p-lg-0 text-start submenu-child" aria-labelledby="multimediaDropdown">
                                <li><a className="dropdown-item" href="#"><span>BenQ</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>ViewSonic</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>Acer</span></a></li>
                            </ul>
                        </li>
                            <li className="md-dropdown lg-dropend dropdown-submenu"><a className="dropdown-item dropdown-toggle" id="multimediaConference" href="#" data-bs-toggle="dropdown" aria-expanded="false"><span>Conferencing Systems</span></a>
                             <ul className="dropdown-menu p-lg-0 text-start submenu-child" aria-labelledby="multimediaConference">
                                <li><a className="dropdown-item" href="#"><span>Video Conference System</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>Audio Conference System</span></a></li>
                            </ul>
                            </li>
                            <li  className="md-dropdown lg-dropend dropdown-submenu"><a className="dropdown-item  dropdown-toggle" href="#" id="multimediaInteractive"  data-bs-toggle="dropdown" aria-expanded="false"><span>Smart Interactive Solutions</span></a>
                            <ul className="dropdown-menu p-lg-0 text-start submenu-child" aria-labelledby="multimediaInteractive">
                                <li><a className="dropdown-item" href="#"><span>Interactive Flat Panel</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>Interactive White Board</span></a></li>
                            </ul>
                            </li>
                            <li><a className="dropdown-item" href="#"><span>Video Wall Display</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Digital Display Solutions</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Wireless Display Solution</span></a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')} href="#">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')} href="#">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')} href="#">BLOG</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>

</div>
  );
};

export default NavBar;
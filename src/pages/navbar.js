import React, { useState } from 'react';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    
  return (
<div style={{backgroundColor:"rgb(2, 5, 25)"}}>
<nav className="navbar navbar-expand-lg p-3">
    <div className="container">
        <img src='assets/logo.png' alt="Logo" width="200" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-lg-start text-center">
                <li className="nav-item">
                    <a  className={`nav-link mx-2 ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleNavClick('Home')} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')} href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a  className={`nav-link mx-2 dropdown-toggle ${activeLink === 'products' ? 'active' : ''}`} onClick={() => handleNavClick('products')} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="navbarDropdownMenuLink">
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown" data-bs-toggle="dropdown" aria-expanded="false">Multimedia Projectors</a>
                            <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="multimediaDropdown">
                                <li><a className="dropdown-item" href="#">BenQ</a></li>
                                <li><a className="dropdown-item" href="#">ViewSonic</a></li>
                                <li><a className="dropdown-item" href="#">Acer</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Video Conference System</a></li>
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Smart Interactive Solutions</a>
                            <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="multimediaDropdown2">
                                <li><a className="dropdown-item" href="#">Interactive Flat Panel</a></li>
                                <li><a className="dropdown-item" href="#">Interactive White Board</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Video Wall Display</a></li>
                        <li><a className="dropdown-item" href="#">Digital Display Solutions</a></li>
                        <li><a className="dropdown-item" href="#">Wireless Display Solutions</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')} href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')} href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')} href="#">Blog</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</div>
  );
};

export default NavBar;
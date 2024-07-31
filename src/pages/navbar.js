import React, { useState } from 'react';
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const handleNavClick = (link) => {
        setActiveLink(link);
    };
    
  return (
<div>
{/* <nav className="navbar navbar-expand-lg p-3">
    <div className="container">
        <img src='assets/logo.png' alt="Logo" width="200" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-lg-start text-center">
                <li className="nav-item">
                    <a  className={`nav-link mx-2 ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleNavClick('Home')} aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')} href="#">ABOUT US</a>
                </li>
                <li className="nav-item dropdown">
                    <a  className={`nav-link mx-2 dropdown-toggle ${activeLink === 'products' ? 'active' : ''}`} onClick={() => handleNavClick('products')} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTS
                    </a>
                    <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="navbarDropdownMenuLink">
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown" data-bs-toggle="dropdown" aria-expanded="false">Audio Visual Solutions</a>
                            <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="multimediaDropdown">
                                <li><a className="dropdown-item" href="#">BenQ</a></li>
                                <li><a className="dropdown-item" href="#">ViewSonic</a></li>
                                <li><a className="dropdown-item" href="#">Acer</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Interactive Solutions</a></li>
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown2" data-bs-toggle="dropdown" aria-expanded="false">AV Over IP & Lecture Capture Solutions</a>
                            <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="multimediaDropdown2">
                                <li><a className="dropdown-item" href="#">Interactive Flat Panel</a></li>
                                <li><a className="dropdown-item" href="#">Interactive White Board</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="#">Training Aids & Accessories</a></li>
                        <li><a className="dropdown-item" href="#">Office Automation Solutions</a></li>
                        <li><a className="dropdown-item" href="#">Full HD / 4K Wireless Solution</a></li>
                        <li><a className="dropdown-item" href="#">Conferencing Solutions</a></li>
                        <li><a className="dropdown-item" href="#">Laser Printer</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')} href="#">SOLUTION</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')} href="#">KNOWLEDGE CENTER</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link mx-2 ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')} href="#">CONTACT US</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}
<nav className="navbar navbar-expand-lg p-3">
    <div className="container">
        <img src="assets/logo.png" alt="Logo" width="200" />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
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
                        <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')} href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${activeLink === 'products' ? 'active' : ''}`} onClick={() => handleNavClick('products')} href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRODUCTS
                        </a>
                        <ul className="dropdown-menu main-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li className="md-dropdown lg-dropend dropdown-submenu">
                            <a className="dropdown-item dropdown-toggle" href="#" id="multimediaDropdown" data-bs-toggle="dropdown" aria-expanded="false"><span>Audio Visual Solutions</span></a>
                            <ul className="dropdown-menu p-0 text-lg-start text-center" aria-labelledby="multimediaDropdown">
                                <li><a className="dropdown-item" href="#"><span>Multimedia Projectors</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>Video Walls</span></a></li>
                                <li><a className="dropdown-item" href="#"><span>Digital Signage</span></a></li>
                            </ul>
                        </li>
                            <li><a className="dropdown-item" href="#"><span>Interactive Solutions</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>AV Over IP & Lecture Capture Solutions</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Training Aids & Accessories</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Office Automation Solutions</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Full HD / 4K Wireless Solution</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Conferencing Solutions</span></a></li>
                            <li><a className="dropdown-item" href="#"><span>Laser Printer</span></a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')} href="#">SOLUTION</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')} href="#">KNOWLEDGE CENTER</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`} onClick={() => handleNavClick('blog')} href="#">CONTACT US</a>
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
import React, { useEffect, useState } from 'react';
import '../css/products.css'
import NavBar from './layout/navbar';
import Footer from './layout/footer';
const Acer = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
<div>
<div className={`navbar-container navbar-custom-border ${isSticky ? 'sticky' : ''}`}>
  <NavBar/>
  </div>
        <div className="container mt-5 mb-5">
          <div className='row'>
            <div className='col-12'>
              <h2 className='benq-heading-1'>Acer Projector In Pakistan</h2>
              <p className='benq-text-1'>AV Smart Technologies is the authorized Reseller Partner of Acer Projectors in Pakistan. Whether you use it for your conference room, Class Room, Auditorium or into an interactive space. Transform your office or classroom into a truly collaborative space. Discover Projectors for Corporate and Education applications. Create freely with rich tools on a scalable canvas.</p>
              <h4 className='mt-4'>Introduction to DLP Projectors</h4>
              <p className='benq-text-1'><span className='fw-bold'>DLP (Digital Light Processing) projectors</span> are a popular type of projector technology known for their high image quality, reliability, and versatility. Developed by Texas Instruments, DLP projectors use a digital micromirror device (DMD) to project images. They are widely used in various settings, including home theaters, business presentations, classrooms, and large venues.</p>
              <h4 className='mt-4'>How DLP Projectors Work</h4>
              <p className='benq-text-1'>DLP projectors utilize a DMD chip, which contains thousands of tiny mirrors that tilt to reflect light towards or away from the projection surface. Here’s a basic overview of how they work</p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-3 col-md-4 col-6'>
            <div className='benq-card2 text-start p-md-4 p-2'>
                <img src='assets/Acer-X1226-AH.jpg' className='img-fluid pb-md-4 pb-3 pt-md-0 pt-1' alt='gallery'/>
                <h3 className='benq-card-heading'>Acer X1126AH</h3>
                <ul className='ps-4'>
                    <li>
                    <span>Native Resolution: </span> 800 x 600
                    </li>
                    <li>
                    <span>Maximum Resolution: </span> 1920 x 1200
                    </li>
                </ul>
                <button className='benq-button-2 mb-md-0 mb-1'>Read More</button>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-6'>
            <div className='benq-card2 text-start p-md-4 p-2'>
                <img src='assets/Acer-X1226-AH.jpg' className='img-fluid pb-md-4 pb-3 pt-md-0 pt-1' alt='gallery'/>
                <h3 className='benq-card-heading'>
                Acer X1226AH</h3>
                <ul className='ps-4'>
                    <li>
                    <span>Native Resolution: </span> 1024 x 768
                    </li>
                    <li>
                    <span>Maximum Resolution </span> 1920 x 1200
                    </li>
                </ul>
                <button className='benq-button-2 mb-md-0 mb-1'>Read More</button>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-6 mt-md-0 mt-3'>
            <div className='benq-card2 text-start p-md-4 p-2'>
                <img src='assets/Acer-X1226-AH.jpg' className='img-fluid pb-md-4 pb-3 pt-md-0 pt-1' alt='gallery'/>
                <h3 className='benq-card-heading'>Acer X1326AH</h3>
                <ul className='ps-4'>
                    <li>
                    <span>Native Resolution: </span> 1024 x 768
                    </li>
                    <li>
                    <span>Maximum Resolution: </span> 1920 x 1200
                    </li>
                </ul>
                <button className='benq-button-2 mb-md-0 mb-1'>Read More</button>
              </div>
            </div>
          </div>
        </div>
          <div className='whatsapp-position-custom'>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="80"
      height="80"
      viewBox="0 0 48 48"
      className="whatsapp-logo"
    >
      <path
        fill="#fff"
        d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
      ></path>
      <path
        fill="#fff"
        d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
      ></path>
      <path
        fill="#40c351"
        d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
      ></path>
      <path
        fill="#40c351"
        d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
        clipRule="evenodd"
      ></path>
    </svg>
    </div>
          <Footer/>
</div>
  );
};

export default Acer;
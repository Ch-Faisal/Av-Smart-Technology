import React, { useEffect, useState } from 'react';
import '../css/products.css'
import NavBar from './layout/navbar';
import Footer from './layout/footer';
const AudioConference = () => {
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
              <h2 className='benq-heading-1'>Audio Conference System In Pakistan</h2>
              <p className='benq-text-1'>A conference system typically refers to a setup or infrastructure designed to facilitate meetings, presentations, discussions, or other collaborative activities involving multiple participants. These systems are used in various settings, including corporate boardrooms, conference halls, educational institutions, and governmental organizations. The primary purpose of a conference system is to enable effective communication and interaction among participants, regardless of their physical locations. AV Smart Technologies having team of professional with international Experience and best services always.</p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6 col-12'>
            <div className='benq-card2 benq-card4 text-start p-4'>
               <div className='text-center'>
               <img src='assets/HTDZ-3000.jpg' className='img-fluid pb-4 ' alt='gallery'/>
               </div>
                <h3 className='benq-card-heading'>HTDZ HT-3000 Wired Meeting Microphone System</h3>
                <ul className='ps-4'>
                    <li>
                    Built-in monitoring loudspeaker.
                    </li>
                    <li>
                    Operating modes: Free, Limit 1/2/3/5.
                    </li>
                </ul>
                <button className='benq-button-2 mb-md-0 mb-1'>Read More</button>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12 mt-md-0 mt-3'>
            <div className='benq-card2 benq-card4 text-start p-4'>
                <div className='text-center'>
                <img src='assets/Logitech-Group (1).png' className='img-fluid pb-4' alt='gallery'/>
                </div>
                <h3 className='benq-card-heading'>HTDZ Ht-966 UHF Wireless Meeting Microphone System</h3>
                <ul className='ps-4'>
                    <li>
                    Adopt CPU control with PLL combined technology.
                    </li>
                    <li>
                    Frequency selection of IR
                    </li>
                </ul>
                <button className='benq-button-2 mb-md-0 mb-1'>Read More</button>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-12 mt-lg-0 mt-3'>
            <div className='benq-card2 benq-card4 text-start p-4'>
                <div className='text-center'>
                <img src='assets/4k-Voice-Tracking-camera (1).jpg' className='img-fluid pb-4' alt='gallery'/>
                </div>
                <h3 className='benq-card-heading'>Bosch 1000 CCSD-CURD Wireless Meeting Microphone System</h3>
                <ul className='ps-4'>
                    <li>
                    Plug-and-play functionality for quick and easy connection of up to 80 Discussion Devices
                    </li>
                    <li>
                    Intuitive web browser interface control for advanced configuration and control
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

export default AudioConference;
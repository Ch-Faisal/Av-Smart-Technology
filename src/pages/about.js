import React, { useEffect, useState } from 'react';
import '../css/about.css'
import NavBar from './navbar';
import Footer from './footer';
const About = () => {
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
<div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
  <NavBar/>
  </div>
  <div className='background-img7 overlay2'>
          <h2 className='mt-3 custom-hero-heading'>About Us</h2>
        </div>
        <div className='container mt-5'>
            <div className='row d-flex align-items-center justify-content-between'>
                <div className='col-lg-6 col-12 order-lg-1 order-2'>
                    <img src='assets/about-main1.png' className='img-fluid' alt='image1'/>
                </div>
                <div className='col-lg-6 col-12 order-lg-2 order-1'>
                    <h3 className='about-heading'>The Av Smart Technologies & Co. Story</h3>
                    <p className='about-text'>In the Streets of old Delhi, a happening theatre in early 1900s caught fire and the owner Muhammad Ismail took this to heart and was no more. Left with handful of orphans and widow, Muhammad Usman the eldest among the kids though only 10 years of age at the time took responsibility and joined a local stationary shop. He was a diligent learner, and ardent listener, persistent at his work and an entrepreneur in the making. Few years passed Muhammad Usman and his Cousin decided to open their own stationary shop; with the business plan ready, they left Delhi by train to register their company which was done in another city at the time. The only thing, they still had to come up with was the company name. Muhammad Usmans’ Mother Khairan Bi happened to be the Maternal Aunt of his cousin and they decided on the first two initials of the company name “K.B”. Very thoughtful of them, now “K.B” didn’t seem complete on its own.<br/> 

Due to the hindu-muslim-sikh rifts in those days, they wanted such a name which does not clearly identify their company with any one religious sect so as to keep safe and they had it, there was Sarkar Raj, so Sarkar seems like a neutral name to keep, So it came to be known as K.B.Sarkar & Co.</p>
                </div>
            </div>
        </div>
        <div className='about-section-bg mt-5 d-flex align-items-center'>
            <div className='container-fluid z-1'>
                <div className='row px-3 mt-lg-5 mb-lg-5 mt-4 mb-4 px-lg-5 px-0'>
                    <div className='col-lg-5 col-12 text-lg-start text-center'>
                        <p>Gain Success with us!</p>
                        <h3>Get to know us better!</h3>
                    </div>
                    <div className='col-lg-2 col-md-4 col-6 text-center mt-lg-0 mt-3'>
                        <h3>11,000+</h3>
                        <h4>Customers Served</h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-6 text-center mt-lg-0 mt-3'>
                        <h3>85+</h3>
                        <h4>Years In Business</h4>
                    </div>
                    <div className='col-lg-2 col-md-4 col-12 text-center mt-lg-0 mt-3'>
                        <h3>3</h3>
                        <h4>Location</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5 mb-5 about-last-section'>
            <div className='row d-flex justify-content-lg-between justify-content-center'>
                <div className='col-lg-2 col-4'>
                    <div className='text-center'>
                <i aria-hidden="true" class="fas fa-hand-holding-heart" style={{fontSize:"50px"}}></i>
                <h4 className='mt-1'>Good Will</h4>
                </div>
                </div>
                <div className='col-lg-2 col-4'>
                <div className='text-center'>
                <i aria-hidden="true" class="far fa-lightbulb " style={{fontSize:"50px"}}></i>
                <h4 className='mt-1'>Solution</h4>
                </div>
                </div>
                <div className='col-lg-2 col-4'>
                <div className='text-center'>
                <i aria-hidden="true" class="fas fa-users" style={{fontSize:"50px"}}></i>
                <h4 className='mt-1'>Presence</h4>
                </div>
                </div>
                <div className='col-lg-2 col-6 mt-lg-0 mt-3'>
                <div className='text-center'>
                <i aria-hidden="true" class="fab fa-whmcs" style={{fontSize:"50px"}}></i>
                <h4 className='mt-1'>Technical Experience</h4>
                </div>
                </div>
                <div className='col-lg-2 col-6 mt-lg-0 mt-3'>
                <div className='text-center'>
                <i aria-hidden="true" class="fas fa-handshake" style={{fontSize:"50px"}}></i>
                <h4 className='mt-1'>
                After Sale Services</h4>
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

export default About;
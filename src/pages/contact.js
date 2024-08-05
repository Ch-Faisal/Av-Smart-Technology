import React, { useEffect, useState } from 'react';
import '../css/contact.css'
import NavBar from './navbar';
import Footer from './footer';
import { Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
const position = [31.5204, 74.3587];

const customIcon = new L.Icon({
  iconUrl: 'assets/icons8-location.gif',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const Contact = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      phone:'',
      organization:''
    });

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  return (
<div>
<div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
  <NavBar/>
  </div>
  <div className='background-img-contact overlay2'>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-8 col-md-10 col-12'>
        <h2 className='mt-3 custom-hero-heading'>Contact Us</h2>
        <p>Thank you for your interest in KBSarkar, if you have any questions about our services you can call or email us, and we will be happy to assist you</p>
        </div>
      </div>
    </div>
        </div>
        <div className='container mt-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-12 text-center'>
            <h2 className='contact-heading'><span className='contact-custom-color'>Get in</span> Touch or <span className='contact-custom-color'>Book a</span> Demo</h2>
            </div>
            <div className='col-lg-4 col-md-8 col-10 mt-lg-0 mt-3 order-lg-1 order-2'>
              <div className='our-solution-card1 mt-4'>
                <img src='assets/lahore2.jpg' className='img-fluid' alt='lahore'/>
                <div className='custom-padding-contact'>
                <h4 className='contact-card-heading mt-1 mb-4'>Lahore Regional Office</h4>
                <h6 className='contact-card-h6'>Address :</h6>
                <p className='contact-card-p'>Office # 19 Ground Floor Al Latif Centre, Main Boulevard Gulberg III Lahore, Pakistan</p>
                <h6 className='contact-card-h6'>Phone :</h6>
                <p className='contact-card-p'>+92 321 0333 525</p>
                <h6 className='contact-card-h6'>Email :</h6>
                <p className='contact-card-p'>info@avsmarttechnologies.com</p>
              </div>
            </div>
            </div>
            <div className='col-lg-8 col-12 order-lg-2 order-1 ps-5'>
              <div className="contact-form mt-4">
              <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Your Name*</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Your Email*</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone Number*</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="organization">Organization / Institution Name*</label>
    <input
      type="text"
      id="organization"
      name="organization"
      value={formData.organization}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Your Message*</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>
  <button type="submit">Submit</button>
</form>

    </div>
            </div>
          </div>
        </div>
        <div className='container mt-5 mb-5'>
          <div className='row'>
                    <div className='col-12'>
              <h2 className='contact-heading text-center'><span className='contact-custom-color'>We are</span> optimists <span className='contact-custom-color'>who love</span> to work together</h2>
              <div className='mt-5'>
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }} 
                spaceBetween={20}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  991: {
                    slidesPerView: 4,
                  },
                }}
                >
                  <SwiperSlide>
                    <img src='assets/avatar_1.jpg' className='img-fluid' alt='avatar1'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/avatar_2.jpg' className='img-fluid' alt='avatar2'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/avatar_3.jpg' className='img-fluid' alt='avatar3'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/avatar_4.jpg' className='img-fluid' alt='avatar4'/>
      </SwiperSlide>
          </Swiper>
          </div>
            </div>
          </div>
        </div>
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Office # 19, Ground Floor, Al Latif Centre, Main Boulevard Gulberg III, Lahore, Pakistan
        </Popup>
      </Marker>
    </MapContainer>
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

export default Contact;
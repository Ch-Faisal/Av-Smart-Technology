import React from 'react';
const Footer = () => {

    
  return (
<div>
<footer className="mt-2">
  <section className="py-4">
    <div className="container">
      <div className="row gy-3">
        <div className=" col-lg-3 col-md-6 col-12">
          <div class="link-wrapper">
            <h4 class="mb-3">About Us</h4>
            <p>K.B.Sarkar & Co. came to existence in 1935 when Mr. Mohammed Usman Kalia founded an artist material supplies shop in Delhi, India. </p>
            <div className='d-flex justify-content-start gap-2'>
            <a className="footer-icon" href="#" target="_blank">
						<i className="fab fa-facebook"></i></a>
					<a className="footer-icon" href="#" target="_blank">
						<i className="fab fa-instagram"></i></a>
					<a className="footer-icon" href="#" target="_blank">
						<i className="fab fa-twitter"></i>					</a>
					<a className="footer-icon" href="#" target="_blank">
						<i className="fab fa-youtube"></i>					</a>
					<a className="footer-icon" href="#" target="_blank">
						<i className="fab fa-linkedin"></i>					</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Quick Links</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Home
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; About
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Products
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Services
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Contact
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Blog
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Category Links</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!" >
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Multimedia Projectors
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Conferencing Systems</a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Smart Interactive Solutions
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Video Wall Display
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Digital Display Solutions
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-angle-double-right"></i>&nbsp; Wireless Display Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Contact Us</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a href="#!" className='footer-text-inner'>
                <i aria-hidden="true" class="fas fa-phone-alt"></i> &nbsp;+92 321 0333 525
                </a>
              </li>
              <li className="mb-3">
                <a href="#!" className='footer-text-inner'>
                <i aria-hidden="true" class="fas fa-mail-bulk"></i> &nbsp;info@avsmarttechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row gy-3 pt-4 d-lg-flex justify-content-lg-center'>
      <div className="col-lg-4 col-md-6 col-12">
          <div className="link-wrapper">
            <h4 className="mb-3">Lahore Regional Office</h4>
            <ul className="m-0 list-unstyled">
              <li className="mb-3">
                <a className='d-flex align-items-center gap-2' href="#!">
                <i aria-hidden="true" class="fas fa-map-marker-alt"></i> &nbsp;Office # 19 Ground Floor Al Latif Centre, Main Boulevard Gulberg III Lahore, Pakistan
                </a>
              </li>
              <li className="mb-3">
                <a href="#!">
                <i aria-hidden="true" class="fas fa-phone-alt"></i> &nbsp;info@avsmarttechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>
    <div className="container-fluid footer-last pt-3 pt-md-4">
      <div className="row">
        <div className="col-12">
          <div className="mb-1 text-center">
            <p className='footer-text'>Copyright © 2024 <span className='footer-text-inner'>AV Smart Technologies</span> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
</div>
  );
};

export default Footer;
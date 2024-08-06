import React, { useEffect, useState } from 'react';
import '../css/home.css'
import NavBar from './layout/navbar';
import Footer from './layout/footer';
import { Navigation,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
const HomePage = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update sticky state based on scroll position
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the user is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
        <NavBar />
      </div>
  <Swiper
      modules={[Navigation,Autoplay]}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}      
    >
      <SwiperSlide>
      <div className='background-img1 overlay'>
          <img src='assets/benq.png' className='img-fluid' width="100" alt='benq'/>
          <h2 className='mt-3 custom-hero-heading'>No1 4K Projector in the World</h2>
          <p className='px-2 custom-hero-text mt-3'>Bringing total visual enjoyment for all your home entertainment, BenQ color expertise perfectly balances high visual brightness</p>
          <button className='hero-section-button mt-3'>Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='background-img2 overlay'>
        <img src='assets/benq.png' className='img-fluid' width="100" alt='benq'/>
          <h2 className='mt-3 custom-hero-heading'>Harness the Power of Productivity with Digital Collaboration</h2>
          <p className='px-2 custom-hero-text mt-3'>BenQ’s range of 4K UHD Interactive Flat Panels (IFP) are optimized for education and have the friendliest user interface along with classroom-</p>
          <button className='hero-section-button mt-3'>Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='background-img3 overlay'>
        <img src='assets/benq.png' className='img-fluid' width="100" alt='benq'/>
          <h2 className='mt-3 custom-hero-heading'>Meet the Next Generation Touch Screens</h2>
          <p className='px-2 custom-hero-text mt-3'>BenQ Corporate Interactive Flat Panels (IFPs) are designed to tap into the dynamic possibilities of the modern meeting room</p>
          <button className='hero-section-button mt-3'>Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='background-img5 overlay'>
        <img src='assets/benq.png' className='img-fluid' width="100" alt='benq'/>
          <h2 className='mt-3 custom-hero-heading'>Great things happen when people click</h2>
          <p className='px-2 custom-hero-text mt-3'>InstaShow, the wireless presentation and conferencing hub, makes hybrid collaboration flow, in one click</p>
          <button className='hero-section-button mt-3'>Learn More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='background-img4 overlay'>
        <img src='assets/benq.png' className='img-fluid' width="100" alt='benq'/>
          <h2 className='mt-3 custom-hero-heading1'>Collaborate your way</h2>
          <p className='px-2 custom-hero-text1 mt-3'>Enterprise Video Conference Solution</p>
          <button className='hero-section-button mt-3'>Learn More</button>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
        <h2 className="text-center section-2-heading"><span class="underline">Our </span>Solutions</h2>
        </div>
      </div>
      <div className='row mt-3 d-flex justify-content-between'>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card'>
                <div className='elementor-icon'> 
                <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    className="your-svg-class"
    fill='white'
  >
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
      <path d="M777.6,2743.8c-325.4-70.8-587.6-333-656.5-656.5c-15.3-70.8-21.1-557-21.1-1579.1c0-1609.7,0-1594.4,109.1-1797.3c67-124.4,248.8-292.9,377.1-352.2c57.4-26.8,157-57.4,222-68.9l114.8-23v-340.7v-340.7l55.5-61.3l55.5-63.2l648.9-5.7c719.7-7.7,769.4-1.9,828.8,97.6c34.4,53.6,38.3,97.6,38.3,392.4v329.2h2450h2450v-325.4c0-369.4,15.3-424.9,124.4-470.8c95.7-38.3,1282.4-40.2,1376.2,0c118.7,49.8,126.3,78.5,126.3,451.7v336.9l118.7,23c319.7,59.3,595.3,313.9,675.7,625.9c24.9,97.6,28.7,321.6,28.7,1607.8c0,936-7.7,1523.6-21,1577.2c-51.7,224-237.4,465.1-436.4,566.6c-218.2,109.1,0,105.3-4452.1,103.4C1661.9,2770.6,873.3,2764.9,777.6,2743.8z M9249.2,2303.6c116.7-59.3,201-170.4,229.7-302.4c15.3-70.8,19.1-528.3,15.3-1544.7c-5.7-1366.6-7.6-1448.9-42.1-1512.1c-49.8-93.8-122.5-168.4-212.5-216.3l-76.6-42.1H5000H836.9l-76.6,42.1c-90,47.9-162.7,122.5-212.5,216.3c-34.5,63.2-36.4,145.5-42.1,1512.1c-3.8,1016.4,0,1473.8,15.3,1544.7c28.7,135.9,109.1,239.3,231.6,300.5l101.4,49.8h4149.7h4151.6L9249.2,2303.6z M2148-1926.5v-201h-411.5H1325v201v201h411.5H2148V-1926.5z M8675-1926.5v-201h-411.5H7852v201v201h411.5H8675V-1926.5z"></path>
      <path d="M7390.7,1922.7c-155-32.5-327.3-101.5-470.9-185.7c-139.7-84.2-379-323.5-463.2-463.2c-262.2-444.1-283.3-922.6-57.4-1389.6c82.3-166.5,120.6-222,252.7-356c178-178,352.2-289,578-367.5c139.7-47.9,176.1-51.7,440.2-53.6c273.7,0,294.8,1.9,455.5,59.3c231.6,84.2,359.8,164.6,541.7,342.6c277.5,273.7,407.7,562.7,423,947.5c7.6,179.9,1.9,250.7-30.6,390.5c-118.7,497.7-491.9,890-987.6,1045.1C7899.8,1945.6,7570.6,1959,7390.7,1922.7z M7823.2,1528.4c90-13.4,187.6-45.9,294.8-97.6C8765,1113,8887.5,253.6,8355.4-232.6c-116.8-107.2-327.3-214.4-480.4-246.9C7323.7-594.3,6785.8-230.6,6671,337.8c-86.1,419.2,137.8,880.5,524.5,1079.5C7419.4,1532.2,7582.1,1560.9,7823.2,1528.4z"></path>
      <path d="M7553.4,1092c-105.3-84.2-112.9-208.6-19.1-302.4c49.8-49.8,80.4-65.1,134-65.1c101.4,0,181.8-80.4,204.8-201c23-124.4,101.5-201,206.7-201c264.1,0,269.9,388.5,9.6,643.1C7941.9,1107.3,7654.8,1176.2,7553.4,1092z"></path>
      <path d="M1409.2,1704.5c-23-17.2-51.7-51.7-63.2-74.7c-15.3-28.7-21.1-359.8-21.1-1106.3c0-1184.8-3.8-1154.2,128.2-1207.8c82.3-36.4,178-9.6,235.4,63.2c38.3,47.9,38.3,74.6,38.3,1148.4v1100.6l-55.5,55.5c-45.9,44-72.7,55.5-139.7,55.5C1482,1738.9,1432.2,1725.5,1409.2,1704.5z"></path>
      <path d="M2203.6,1683.4l-55.5-55.5V527.3c0-1073.8,0-1100.6,38.3-1148.4c57.4-72.7,153.1-99.5,235.4-63.2c132.1,53.6,128.2,23,128.2,1205.8c0,782.9-5.7,1075.7-23,1112.1C2475.4,1748.5,2297.3,1775.3,2203.6,1683.4z"></path>
      <path d="M3024.7,1683.4l-63.2-55.5l-5.7-1050.8c-3.8-576.1,0-1075.7,5.7-1108.2c13.4-74.7,90-155,162.7-170.4c78.5-17.2,181.8,36.4,218.2,114.8c26.8,55.5,30.6,195.2,30.6,1098.7c0,1114-1.9,1127.4-97.6,1196.3C3202.7,1758.1,3097.4,1748.5,3024.7,1683.4z"></path>
    </g>
  </svg>
                </div>
                <h3 className='mt-3 our-soluion-heading'>Projection System
                </h3>
                <p className='mt-3 our-solution-text'>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
                <button className='our-solution-button'>Learn More</button>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-12 mt-md-0 mt-3 text-md-start text-center'>
              <div className='our-solution-card'>
                <div className='elementor-icon'> 
                <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    className="custom-svg-icon"
  >
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g>
      <path d="M621.8,813.6c-2-9-3.4-17.9-4.5-26.2H382.7c-2.1,16.8-5.8,35.8-12.4,53.4c-6.6,17.7-15.9,33.7-28.5,45c-12.7,11.2-28.5,18.3-50.6,18.4v21h417.6v-21c-22.1-0.1-37.9-7.2-50.6-18.5C639.2,868.9,627.8,841,621.8,813.6z M962.1,74.8H37.9C22.5,74.8,10,87.3,10,102.7V710c0,15.4,12.5,27.9,27.9,27.9h924.2c15.4,0,27.9-12.5,27.9-27.9V102.7C990,87.3,977.5,74.8,962.1,74.8z M922.3,670.2H77.6V142.5h844.7V670.2z"/>
    </g>
  </svg>
                </div>
                <h3 className='mt-3 our-soluion-heading'>Digital Displays
                </h3>
                <p className=' mt-3 our-solution-text'>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
                <button className='our-solution-button'>Learn More</button>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3  text-md-start text-center'>
              <div className='our-solution-card'>
                <div className='elementor-icon'> 
                <svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    className="custom-svg-icon" // Optional: Add a class for custom styling
  >
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g>
      <path d="M842.6,541.1c10.9,0,21.9,4.3,30.3,12.6c16.8,16.8,16.8,44,0,60.6L664.4,822.9c-12.7,13.7-30.6,22.5-50.7,22.5H241.9c-14.3,0-33.9,8-44,18.1l-111.5,115c-7.8,7.7-15.1,11.5-21.1,11.5c-9.3,0-15.4-9.2-15.4-26.7v-117c0-14,8.1-33.9,18.2-44l71-74.1c0-0.1,144.3-155.8,144.3-155.8c8-8.7,19.3-14.3,32-14.3h246.6c23.8,0,43,19.1,43,42.9c0,23.7-19.3,43.1-43,43.1H406.2l-60.6,64h312.2l154.3-154.2C820.5,545.3,831.6,541.1,842.6,541.1L842.6,541.1z"/>
      <path d="M872.7,380.2c9.4-16.4,16.7-34.2,21.7-52.8l0.7-3.2l54.9-13.8l-0.1-76l-54.8-13.8l-0.9-3c-5.1-19-12.4-36.6-21.9-52.7l-1.6-2.8l28.8-48.4l-53.9-53.8l-48.2,29l-2.8-1.5c-16.6-9.6-34.4-16.9-52.9-21.9l-3-0.7L725,10l-76.3,0.1L635,64.8l-3,0.9c-18.6,4.9-36.3,12.2-52.9,21.9l-2.8,1.6l-48.4-29l-53.8,54l29,48.3l-1.6,2.8c-9.6,16.5-16.9,34.3-21.8,52.9l-0.8,3.1L424.4,235l0.1,76.2l54.7,13.7l0.8,3c4.9,18.4,12.2,36.2,21.9,52.8l1.6,2.9l-29,48.4l54,53.8l48.4-29.1l2.8,1.7c16.4,9.6,34.1,16.8,52.8,21.7l3.2,0.9l13.7,54.7l76.2-0.1l13.6-54.8l3.2-0.8c18.5-4.9,36.1-12.2,52.8-21.9l2.7-1.5l48.4,28.9l53.8-53.9l-29-48.4L872.7,380.2z M688.1,450.6h-0.2c-98-0.2-177.5-80.2-177.4-178.1c0.1-97.8,79.9-177.3,177.6-177.3c98.3,0.1,178,80,177.8,178C865.8,371.1,786.1,450.6,688.1,450.6z"/>
      <path d="M697.8,191.6c5.7-5.6,5.7-14.8,0-20.5c-2.7-2.8-6.2-4.2-10.3-4.2c-3.8,0-7.5,1.5-10.2,4.2c-5.6,5.7-5.6,14.8,0,20.5C682.8,197.1,692.4,197.1,697.8,191.6z"/>
      <path d="M611.1,272.4c0-3.9-1.5-7.5-4.3-10.4c-2.7-2.7-6.4-4.1-10.1-4.1c-4,0-7.5,1.5-10.3,4.2c-5.6,5.7-5.6,14.8,0,20.5c5.4,5.5,15,5.5,20.4,0C609.5,279.9,611.1,276.2,611.1,272.4z"/>
      <path d="M779.4,258.8c-3.8,0-7.4,1.5-10.3,4.2c-2.7,2.8-4.1,6.4-4.1,10.2c0,3.8,1.4,7.5,4.1,10.3c5.6,5.4,15.1,5.4,20.5,0c5.6-5.6,5.6-14.8,0-20.5C787,260.3,783.4,258.8,779.4,258.8z"/>
      <path d="M757.3,292c-7,9.2-15,18.4-23.6,27.1c-8.6,8.4-17.4,16.2-26.5,23.2c0.6,0.4,1.2,0.9,1.7,1.4c3,3,5.1,6.5,6.5,10.4c9.8-7.5,19.3-15.8,28.5-24.9c9.4-9.5,18-19.1,25.5-29c-3.8-1.4-7.5-3.5-10.4-6.6C758.3,293.1,757.9,292.6,757.3,292z"/>
      <path d="M757.6,254.1c0.6-0.4,0.9-0.9,1.4-1.4c3-3,6.8-5.3,10.6-6.7c-7.7-10-16.4-19.8-25.7-29.3c-9.3-9.3-19.1-17.9-29-25.4c-1.4,3.8-3.7,7.5-6.7,10.6c-0.6,0.5-1.1,0.9-1.5,1.4c9.3,7.2,18.3,15.1,27.2,23.6C742.5,235.6,750.5,244.8,757.6,254.1z"/>
      <path d="M618.2,253.2c7.1-9,14.8-17.9,23.4-26.4c8.5-8.6,17.7-16.5,27.1-23.3c-0.3-0.8-0.7-1.5-1.2-2.2c-2.5-3.6-5.6-6.9-9.2-9.7c-8.7,7.1-17.5,14.4-26.1,22.2c-8.6,7.8-16.9,16.1-24.6,25.2c0.8,0.8,1.5,1.7,2.2,2.5c3.3,3.6,6.7,7.1,10.5,10.2c10.1-8.6,19.6-17.7,28.5-27.1C621.3,257.8,620.1,255.5,618.2,253.2z"/>
    </g>
  </svg>
                </div>
                <h3 className='mt-3 our-soluion-heading'>Smart Solutions
                </h3>
                <p className='mt-3 our-solution-text'>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
                <button className='our-solution-button'>Learn More</button>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3 text-md-start text-center'>
              <div className='our-solution-card'>
                <div className='elementor-icon'> 
                <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
  >
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g>
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        <path d="M7027.8,5027.5c-173.7-19.3-551.9-108.1-735.2-171.7c-472.8-164-860.7-393.7-1244.7-737.2l-111.9-100.3l210.3-212.3c115.8-117.7,221.9-212.3,231.6-212.3c11.6,0,46.3,27,79.1,59.8c111.9,117.7,428.4,339.6,634.9,445.8c441.9,225.8,752.6,303,1254.3,318.4c295.3,7.7,382.1,3.9,578.9-28.9c534.6-92.6,1001.5-312.6,1424.1-671.6l152.5-129.3l214.2,214.2c247,247,248.9,204.6-15.4,426.5c-501.7,416.8-1100,685.1-1761.9,783.5C7764.9,5039.1,7209.2,5046.8,7027.8,5027.5z"/>
        <path d="M7133.9,3979.7c-478.6-61.8-993.8-293.3-1318-592.4l-129.3-119.6l214.2-214.2l214.2-216.1l142.8,119.6c177.5,148.6,503.7,312.6,731.4,366.7c584.7,138.9,1196.4-1.9,1649.9-384l115.8-96.5l218.1,216.1l218,216.1l-92.6,83c-320.3,291.4-737.2,497.9-1192.6,592.4C7722.5,3989.3,7323,4002.8,7133.9,3979.7z"/>
        <path d="M103.9,454l5.8-3392.5l1675-5.8c920.5-1.9,1673.1-9.6,1673.1-19.3c0-7.7-125.4-420.7-277.9-920.5l-276-907l770-5.8c424.5-1.9,1111.5-1.9,1530.3,0l758.4,5.8l-277.9,914.7c-152.5,501.7-277.9,916.6-277.9,920.5c0,3.9,756.5,7.7,1678.9,7.7h1678.9v2445v2446.9l-453.5-453.5l-453.5-453.5v-1538v-1539.9H4441.9H1026.3V438.6v2479.7h2059h2061l-463.1,463.1L4220,3844.6H2161H100L103.9,454z"/>
        <path d="M7263.2,2897.1c-256.7-30.9-519.1-146.7-712.1-314.5l-84.9-75.3l295.3-301c164-166,382.1-391.7,484.4-501.7l189.1-200.7l476.6,488.2c262.5,268.2,478.6,497.9,482.4,511.4c7.7,30.9-202.6,189.1-347.4,262.4C7822.9,2877.8,7529.5,2928,7263.2,2897.1z"/>
      </g>
    </g>
  </svg>
                </div>
                <h3 className='mt-3 our-soluion-heading'>Wireless Display Solutions
                </h3>
                <p className='mt-3 our-solution-text'>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
                <button className='our-solution-button'>Learn More</button>
              </div>
            </div> 
          </div>
    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12 text-center'>
        <h2 className="section-2-heading"><span class="underline">Our </span>Applications</h2>
        <p className='application-text mt-3'>KBsarkar always finds new and smart ways to create new added value in AV-over-IP field.</p>
        </div>
      </div>
      <div className='row mt-3'>
      <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div className='our-solution-card1 text-center'>
                <img src='assets/gallery-1.jpg' className='img-fluid' alt='gallery'/>
                <p className='mt-3 pb-3 our-solution-text'>BenQ Interactive Flat Panels for Corporate</p>
              </div>
            </div>

      </div>
      </div>
        <div className='container mt-5'>
        <div className='row'>
        <div className='col-12'>
        <h2 className="text-center section-2-heading"><span class="underline">Technology </span>Partners</h2>
        </div>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col-12'>
          <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }} 
                spaceBetween={20}
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  991: {
                    slidesPerView: 5,
                  },
                }}
                >
                  <SwiperSlide>
                    <img src='assets/logo1.png' className='img-fluid' alt='logo1'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo2.png' className='img-fluid' alt='logo2'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo3.png' className='img-fluid' alt='logo3'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo4.png' className='img-fluid' alt='logo4'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo5.png' className='img-fluid' alt='logo5'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo6.png' className='img-fluid' alt='logo6'/>
      </SwiperSlide>
      <SwiperSlide>
                    <img src='assets/logo7.png' className='img-fluid' alt='logo7'/>
      </SwiperSlide>
          </Swiper>
        </div>
      </div>
        </div>
        <div className="container mt-5">
          <div className='row'>
            <div className='col-12 d-flex justify-content-center gap-2'>
            <a className="social-icon-facebook icons" href="/" target="_blank">
						<i className="fab fa-facebook"></i></a>
					<a className="icons social-icon-instagram" href="/" target="_blank">
						<i className="fab fa-instagram"></i></a>
					<a className="icons social-icon-twitter" href="/" target="_blank">
						<i className="fab fa-twitter"></i>					</a>
					<a className="icons social-icon-youtube" href="/" target="_blank">
						<i className="fab fa-youtube"></i>					</a>
					<a className="icons social-icon-linkedin" href="/" target="_blank">
						<i className="fab fa-linkedin"></i>					</a>
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

export default HomePage;

import React from 'react';
import '../css/home.css'
import NavBar from './navbar';
import { NavLink ,useNavigate, } from 'react-router-dom';
import { Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
const HomePage = () => {

  return (
<div>

  <NavBar/>
  {/* <div className='hero-section'>
    <div className='overflow-custom'>
  <div className='background-img1'>
  <div className='overlay'>
        <div className='text-center'>
          <h2 className='mt-3 custom-hero-heading'>Your Audio Visual Solution Partner</h2>
          <p className='px-2 custom-hero-text mt-3'>AV Smart Technologies is a company that specializes in designing, installing, and maintaining audio and visual systems for various applications. We offer a range of services and products related to av technologies, including, Multimedia Projectors, sound systems, Interactive Display system, video conferencing solutions, digital signage, LCD/DLP/Laser Projector  systems, control systems In all over Pakistan.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h3 className='section-2-home-heading'>Our Solutions</h3>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div>
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
                <h3 className='mt-3'>Projection System
                </h3>
                <p>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div>
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
                <h3 className='mt-3'>Projection System
                </h3>
                <p>Digital displays have numerous applications across various industries. They are used for advertising and promotion, providing information in public spaces. Digital displays have numerous applications across various industries. They are used for advertising and promotion, providing information.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div>
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
                <h3 className='mt-3'>Projection System
                </h3>
                <p>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-md-start text-center'>
              <div>
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
                <h3 className='mt-3'>Projection System
                </h3>
                <p>With advancements in technology, projection systems have evolved to offer features like high-definition resolution, 3D projection, interactive capabilities, and network connectivity, enhancing their versatility and utility in different applications.</p>
              </div>
            </div>
            
            
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row d-flex align-items-center'>
    <div className='col-lg-6 col-12'>
      <h4 className='about-section-pg1-title'>ABOUT US</h4>
      <h3 className='about-section-pg1-heading mt-lg-4 mt-2'>Tell website visitors who you are and why they should choose your business.</h3>
      <p className='mt-lg-5 mb-lg-5 mt-3 mb-3'>Because when a visitor first lands on your website, you’re a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you’re selling.</p>
      <button className='about-section-pg1-button'>Find Out More</button>
    </div>
    <div className='col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3'>
      <img src='assets/leaf.jpg' className='img-fluid'/>
    </div>
  </div>
        </div>
        <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
        <div className='col-12 mt-5 text-center'>
              <h3 className='section-2-home-heading'>Faqs</h3>
            </div>
    <div className='col-lg-6 col-md-8 col-10 mt-4 text-center'>
      <img src='assets/quotes.svg'/>
      <h3 className='faq-heading mt-3'>“Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”</h3>
    <img src='assets/avatar_on_home.png' width="50" height="50" className='mt-3 img-fluid '/>
    <p className='mt-1'>Jane Miller</p>
    </div>
  </div>
        <div className='row'>
          <div className='col-12 mt-5 text-center'>
              <h3 className='section-2-home-heading'>Our Brands</h3>
            </div>
          </div>
          <div className='row mt-4'>
    <div className='col-3'>
      <img src='assets/brand1.jpg' className='img-fluid' alt='Brand 1'/>
    </div>
    <div className='col-3'>
      <img src='assets/brand2.png' className='img-fluid' alt='Brand 2'/>
    </div>
    <div className='col-3'>
      <img src='assets/brand3.jpg' className='img-fluid img-33' alt='Brand 3'/>
    </div>
    <div className='col-3'>
      <img src='assets/brand4.png' className='img-fluid' alt='Brand 4'/>
    </div>
  </div>
        </div> */}
</div>
  );
};

export default HomePage;

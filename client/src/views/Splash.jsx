import React from 'react';
import { Link } from "react-router-dom";
// import '../components/3dcover';
// import '../components/3dcover.css';
import Carousel from '../components/3dcover';

const Splash = () => {
  return (
    <div>
      <Link to='/home'>
      <h1>ENTER</h1>
      </Link>
      {/* <div id="carousel"></div> */}
      <Carousel />
    </div>
  )
}

export default Splash
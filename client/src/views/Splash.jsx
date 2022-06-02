import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/threeDcover";

const Splash = () => {
    return (
        <div className="htmlWRAP">
                    <Link to="/home">
                        <img style={{'margin':'auto', 'display':'block'}} src={require('../components/images/slogan_transparent.png')} alt="" />
                    </Link>
            <div className="bodyWRAP">
                    <Carousel />
            </div>
        </div>
    );
};

export default Splash;
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/threeDcover";

const Splash = () => {
    return (
        <div className="htmlWRAP">
                    <Link to="/home" style={{'textDecoration':'none'}}>
                      <h1>EVERYONE IS A GAMER!</h1>
                    </Link>
            <div className="bodyWRAP">
                    <Carousel />
            </div>
        </div>
    );
};

export default Splash;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from '../components/Slide'
import { Link, useNavigate } from "react-router-dom";
import GameStreams from "./GameStreams"

const StreamList = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  return (
    <div>
      <div className="navBar">
        <img
          className="logoB"
          src={require("../components/images/logo_black.png")}
          alt="logo"
          onClick={()=>{navigate('/')}}
        />
        <div className="navBarRight">
          <p className="headerButton" onClick={()=>{navigate('/list')}}>Games</p>
          <p>|</p>
          <p className="headerButton" onClick={()=>{navigate('/{user_id}')}}>Account</p>
          <p>|</p>
          <p className="headerButton">Logout</p>
        </div>
      </div>
      <div className="body">
        <div className="bodyLeft"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
        <div className="bodyCenter">
          <div>
          < GameStreams />
          </div>
        </div>
          <div className="bodyRight"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
      </div>
    </div>
  )
}

export default StreamList
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slide from '../components/Slide'
import { Link, useNavigate } from "react-router-dom";
import Games from "../components/Games"

const List = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  
  const logout = () => {
    axios.get("http://localhost:8000/logout", {withCredentials: true})
        .then(res => {
          navigate('/home');
          console.log(res.data)})
        .catch(err => console.log(err))
}

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
          <p className="headerButton" onClick={logout}>Logout</p>
        </div>
      </div>
      <div className="body" style={{'height': 1500}}>
        <div className="bodyLeft"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
        <div className="bodyCenter">
          <div>
          < Games />
          </div>
          {/* <Slide /> */}
        </div>
          <div className="bodyRight"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
      </div>
    </div>
  )
}

export default List
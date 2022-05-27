import React, {useState, useEffect} from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import api from '../api'

function GameStreams() {
  const {id} = useParams();
  let location = useLocation()
  const navigate = useNavigate();

  const [streamData, setStreamData] = useState([]);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
      );
      let dataArray = result.data.data;
      let finalArray = dataArray.map(stream => {
        let newURL = stream.thumbnail_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        stream.thumbnail_url = newURL;
        return stream;
      });

      let totalViewers = finalArray.reduce((acc, val) => {
        return acc + val.viewer_count;
      }, 0);
      setViewers(totalViewers);
      setStreamData(finalArray);
    };
    fetchData();
  }, []);

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
      <div className="body" style={{'height':2350}}>
        <div className="bodyLeft"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
        <div className="bodyCenter">
          <div>
          <div>
      <h1 className="text-center">{id} Streams</h1>
      <h3 className="text-center">
        <strong className="text-primary">{viewers}</strong> people currently
        watching {id}
      </h3>
      <div className="row">
        {streamData.map(stream => (
          <div className="col-lg-3">
            <div className="card">
              <img className="card-img-top" src={stream.thumbnail_url} />
              <div className="card-body">
                <h5 className="card-title">{stream.user_name}</h5>
                <div className="card-text">
                  {stream.viewer_count} live viewers
                </div>
                <button className="btn btn-success">
                  <a
                    className="link"
                    href={"https://twitch.tv/" + stream.user_name}
                    target="_blank"
                  >
                    watch {stream.user_name}'s channel
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
          {/* <Slide /> */}
        </div>
          <div className="bodyRight"></div> {/*OUTSIDE BORDER DON'T USE THIS DIV*/}
      </div>
    </div>
  );
}

export default GameStreams;
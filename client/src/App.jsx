// import './App.css';
import React, { useState } from "react";
import Homepage from './views/Homepage';
import List from './views/List';
import Splash from './views/Splash';
import GameStreams from './views/GameStreams';
import Slide from './components/Slide';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [refreshState, setRefresh] = useState(false)
  // REFRESH
  const refresh = () => {
    setRefresh(!refreshState)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />}/>
        <Route path="/home" element={<Homepage refreshState={refreshState} refresh={refresh}/>}/>
        <Route path="/list" element={<List />}/>
        <Route path="/list/game/:id" element={<GameStreams />}/>
        <Route path="/slide" element={<Slide />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

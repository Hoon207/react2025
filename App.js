
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Notfound from './Notfound';
import Map from './Map';
import Login from './Login';
import Market from './Market';
import Beauty from './Beauty';
import './Base.css';
import KURLY from './images/KURLY.png';

function App() {
  return (
    <BrowserRouter>
    
      <Header/>   
        <Routes>
        <Route path='/main' element={<Main />} />   
        <Route path='/map' element={<Map />} />   
        <Route path='/*' element={<Notfound />} />   
        <Route path='/login' element={<Login />} />   
        <Route path='/beauty' element={<Beauty />} />   
        <Route path='/Market' element={<Market />} />    
        </Routes> 

        <Footer/>   
  </BrowserRouter>  
  );
}

export default App;

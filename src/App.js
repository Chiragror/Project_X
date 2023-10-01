import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// var router = require('browser-router');

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Header/>} />
            <Route path="/Footer" element={<Footer/>} />
          </Route>
        </Routes>

        <br></br>
      </BrowserRouter>
      
    </div>
  )
}

export default App

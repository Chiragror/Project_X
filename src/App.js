import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Loader from './Loader';


const App = () => {
  return (
    <div>
      {/* <Header/>
      <Footer/> */}
      <Loader></Loader>
       <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={ <><login /></>}/>

          <Route path="/Home" element={ <><Header /><Home /><Footer /></>}/>
              
            
          </Route>
        </Routes>

        <br></br>
      </BrowserRouter> 
      
    </div>
  )
}

export default App

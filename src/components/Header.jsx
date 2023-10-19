import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
  return (
    <div className="navbar">
      <div className="logo" >
        {/* <img className="mi" src="\main icon.png" alt="logo" /> */}
        {/* <i class="fa-solid fa-plus fa-beat" style={{color: 'dodgerblue',fontSize:'35px' }}></i> */}
        
       <i class="fa-solid fa-heartbeat fa-beat" style={{fontSize: '50px', left:'39px',color: '#FF9B47'}}></i>

        {/* <a href="/">

        <img className="mi" src="/icon.png" alt="logo" />
        </a> */}
        </div> 
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>   
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Services</Link></li>
        <li><Link to="#">Portfolio</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
    </div>     
  );
}

export default Navbar;

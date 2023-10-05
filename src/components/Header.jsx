import React from 'react';


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
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;

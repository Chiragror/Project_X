import React from 'react';


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo" >
        <img className="mi" src="\main icon.png" alt="logo" />
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

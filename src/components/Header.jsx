import React from 'react';


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo" >
<<<<<<< Updated upstream
        {/* <img className="mi" src="\main icon.png" alt="logo" /> */}
        <i class="fa-solid fa-plus fa-beat" style={{color: 'dodgerblue',fontSize:'35px' }}></i>
        {/* <i class="fa-thin fa-bolt-lightning"></i > */}
       <i class="fa-solid fa-leaf fa-beat" style={{fontSize: '15px',position: 'absolute', left:'39px',color: 'limegreen'}}></i>

=======
        <a href="/">

        <img className="mi" src="\main icon.png" alt="logo" />
        </a>
>>>>>>> Stashed changes
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

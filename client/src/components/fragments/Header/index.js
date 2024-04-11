import React from 'react';
import {FaPercentage, FaDice} from 'react-icons/fa'

export default function NavTabs({ currentApp, handleAppChange }) {
  return (
    <ul className="nav nav-tabs">
      <li><h1><a href='https://honsumal.github.io/portfolio/' className='headline'>Alastair Lee</a></h1></li>

      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handleAppChange('Home')}
          className={currentApp === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <FaPercentage className = 'proj'/>
        </a>
      </li>
    
      <li className="nav-item">
        <a
          href="#pokemon"
          onClick={() => handleAppChange("Pokemon")}
          className={currentApp === "Pokemon" ? 'nav-link active' : 'nav-link'}
        >
        <FaDice className = 'proj'/>
        </a>
      </li>
    </ul>    
  );
}


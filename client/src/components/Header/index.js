import React from 'react';
import {FaPercentage, FaDice} from 'react-icons/fa'

export default function NavTabs({ currentApp, handleAppChange }) {

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };


  return (
    <ul className="nav nav-tabs">
      <li><h1><a href='https://honsumal.github.io/portfolio/' className='headline'>Alastair Lee</a></h1></li>

      <li className="nav-item">
        <a
          href="#"
          onClick={() => handleAppChange('Home')}
          className={currentApp === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <FaPercentage className = 'proj'/>
        </a>
      </li>
    
      <li className="nav-item">
        <a
        href="#"
        onClick={() => handleAppChange('Home')}

        className={currentApp === 'Individual' ? 'nav-link active' : 'nav-link'}
        >
        <FaDice className = 'proj'/>
        </a>
      </li>
    </ul>    
  );
}


import React from 'react'; //{ useEffect, useState }
import { Link } from 'react-router-dom';
import { IoIosHome, IoMdCart, 
  IoIosLogIn, IoIosTrophy,
  IoIosArrowDroprightCircle, 
} from 'react-icons/io';

import orcaLogo from '../../assets/img/_logo-site.png';
import * as CSS from './styled';

export default function NavBar(props) {

  return (
    <CSS.NavBar_div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text"><img src={orcaLogo} alt="home-site" width='130'/> </span>
              <IoIosArrowDroprightCircle size={60}/>
            </a>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              <IoIosHome size={60}/>
              <span className="link-text">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cotacoes" className="nav-link">
              <IoMdCart size={60}/>
              <span className="link-text">Cotações</span>
            </Link>           
          </li>

          <li className="nav-item">
            <Link to="/ranking" className="nav-link">
              <IoIosTrophy size={60}/>
              <span className="link-text">Ranking</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/logon" className="nav-link">
              <IoIosLogIn size={60}/>              
              <span className="link-text">Login</span>
            </Link>
          </li>
        </ul>
      </nav>

    </CSS.NavBar_div>
  )
}
import React from 'react';
import '../styles.css';
import {Link} from 'react-router-dom'

function Nav() {

  const navStyle={
    color:'white'
  }

  return (
    <nav>
        <h3><Link to='/'>Honduras Conecta</Link></h3>
        <ul className="nav-Links">
            <Link to='/about' style={navStyle}><li>About</li></Link>
            <Link to='/businesssolutions' style={navStyle}><li>Business Solutions</li></Link>
            <Link to='/businesssolutions' style={navStyle}><li>Perfil</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;

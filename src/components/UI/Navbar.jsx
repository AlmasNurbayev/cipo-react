import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary" style={{width: '100vw', height: '50px', display: 'inline', backgroundColor: 'teal' }} >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="navbar-brand" to="/about">about</Link></li>
        <li className="nav-item"><Link className="navbar-brand" to="/posts">posts</Link></li>
      </ul>
    </div>
  </div>    
  )
}

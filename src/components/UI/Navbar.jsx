import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import MyButton from './MyButton';
import Login from '../../pages/Login';

export default function Navbar() {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const router = useNavigate();

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary" style={{width: '100vw', height: '50px', display: 'inline', backgroundColor: 'teal' }} >
    <div className="container-fluid">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="navbar-brand"><Link className="navbar-brand" to="/">Navbar</Link></li>
        <li className="nav-item"><Link className="navbar-brand" to="/about">about</Link></li>
        <li className="nav-item"><Link className="navbar-brand" to="/posts">posts</Link></li>
        {isAuth 
        ? <MyButton onClick={logout}>Выйти</MyButton>
        : <MyButton onClick={() => router('/login')}>Войти</MyButton>
        }
        {/* <li className="nav-item"><Link className="navbar-brand" to="/logout">logout</Link></li> */}
      </ul>
    </div>
  </div>    
  )
}

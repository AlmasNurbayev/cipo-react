import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

export default function Login() {

 const {iAuth, setIsAuth} = useContext(AuthContext);
 const router = useNavigate();

 function login(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    router('/posts');
 }   


  return (
    <div>
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Login' />
            <MyInput type="password" placeholder='Password' />
            <MyButton>Sign in</MyButton>
        </form>

    </div>
  )
}

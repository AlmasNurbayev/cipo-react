import React, {useContext} from 'react'
import MyButton from '../components/UI/MyButton';
import { AuthContext } from '../context';

export default function Logout() {

    const {iAuth, setIsAuth} = useContext(AuthContext);

    function logout(event) {
       event.preventDefault();
       setIsAuth(false);
    }   

  return (
    <div>
        <form onSubmit={logout}>
            <p>Выход пользователя</p>
            <MyButton>Разлогиниться</MyButton>
        </form>
    </div>
  )
}

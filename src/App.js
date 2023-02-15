import React, {useEffect, useState} from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import { AuthContext } from './context';


function App() {
  //<Posts title='Список постов:' />
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=> {
    if (localStorage.getItem('auth') == 'true')
      setIsAuth(true);
  }, [])

  return (

    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

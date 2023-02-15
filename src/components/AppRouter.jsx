import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router/routes';
import { AuthContext } from '../context';


export default function AppRouter() {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    // <Routes>
      isAuth === true 
      ? 
        <Routes>
        {privateRoutes.map((route, index) => 
          <Route element={route.element} path={route.path} exact={route.exact} key={'pr' + index}/>
        )} 
        </Routes>
      :
        <Routes>
        {publicRoutes.map((route, index) => 
          <Route element={route.element} path={route.path} exact={route.exact} key={'pb' + index}/>
        )}
        </Routes>
    )
}

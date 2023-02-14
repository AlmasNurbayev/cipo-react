import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './../pages/About';
import Posts from './../pages/Posts';

import Error from './../pages/Error';
import PostPage from '../pages/PostPage';
import { routes } from './router/routes';


export default function AppRouter() {
  return (

    routes.map((route) => {
      <Route element={route.element} path={route.path} exact={route.exact}/>
    })

  )
}

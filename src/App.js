import React from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar';

function App() {
  //<Posts title='Список постов:' />

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

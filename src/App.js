import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css'

import MyButton from './components/UI/MyButton.jsx';




function App() {


  
  const [modal, setModal] = useState();  


  return (
    <div className="App">
    

    <PostList title='Список постов:' />
      
    </div>
  );
} 

export default App;

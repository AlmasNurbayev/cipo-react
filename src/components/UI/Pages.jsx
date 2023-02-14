import React from 'react';
import { useState } from 'react';


export default function Pages({array, limit, onClick}) {

  

  const [activeIndex, setActiveIndex] = useState(1);

   return (
    <ul className={'pagination'}>
      <strong>Страницы:</strong>  
      
      {array.map((element, index) => 
          
          <li 
            onClick={()=> {
              setActiveIndex(index+1);
              onClick(index+1);
              //loadingPosts(index+1);
            }}
            className={index+1 === activeIndex ? 'page-item-active' : 'page-item'}  
            style={{cursor: 'pointer'}} 
            key={'page' + index+1}>
            <a className="page-link" 
              style={index+1 === activeIndex ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
              {element.page}
              </a>
          </li>
   
      )}

    </ul>
  )
}

import React from 'react';
import MyButton from './MyButton.jsx';
import PageA from './PageA.jsx';
import { useState } from 'react';
import useFetching from '../../hooks/useFetching.js';
import { getAll } from '../../API/PostApi.js';

export default function Pages({array, limit, onClick}) {

  

  const [activeIndex, setActiveIndex] = useState(1);

  // const [loadingPosts, isPostLoading, postError] = useFetching(async () => {
  //   console.log(limit, activeIndex);
  //   const res = await getAll(limit, activeIndex);
  //   console.log(res);
    
    //setPosts(res.data);
    //setTotalPages(getPageCount(res.headers['x-total-count'], limit));
  // });


  return (
    <ul className={'pagination'}>
      <strong>Страницы:</strong>  
      
      {array.map((element, index) => 
          
          <li className={index+1 === activeIndex ? 'page-item-active' : 'page-item'}  style={{cursor: 'pointer'}} key={'page' + index+1}>
            <a className="page-link" 
              onClick={()=> {
                setActiveIndex(index+1);
                onClick(index+1);
                //loadingPosts(index+1);
              }}
              style={index+1 === activeIndex ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
              {element.page}
              </a>
          </li>

       // {/* //<PageA onClick={()=>setActiveIndex(index)} active={index === activeIndex ? true : false} limit={element.limit} page={element.page} key={'page' + index}/> */}
    
      )}

    </ul>
  )
}

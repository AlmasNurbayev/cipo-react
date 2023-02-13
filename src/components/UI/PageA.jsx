import React from 'react';
import classes from './PageA.module.css'
import useFetching from '../../hooks/useFetching';
import { getAll } from '../../API/PostApi';

export default function PageA({page, limit, active}) {
  
  //async function fetchPosts() {
    const [loadingPosts, isPostLoading, postError] = useFetching(async () => {
      const res = await getAll(limit, page);
      console.log(res);
      //setPosts(res.data);
      //setTotalPages(getPageCount(res.headers['x-total-count'], limit));
    });
  //}
  let classA = 'page-item';
  let aStyle= {fontStyle: 'normal'};
  if (active) {
    classA ='page-item-active';
    aStyle= {fontStyle: 'bold'};
  }
  console.log(page, active);
  
  return (
    <li className={classA}  style={{cursor: 'pointer'}}>
      <a className={"page-link"} style={aStyle} onClick={loadingPosts}>{page}</a>
    </li>
    
  )
}

import React, { useState, useMemo } from 'react'
import Post from './Post'
import PostFilter from './PostFilter';
import MyInput from './UI/MyInput';
import MySelect from './UI/MySelect'

export default function PostList(props) {


  const [filter, setFilter] = useState({ sort: '', query: '' });
  //let finalPosts = props.posts;

  const sortedPosts = useMemo(() => {
    console.log('sorting...');
    if (filter.sort) {
      console.log(filter.sort);
      if (filter.sort === 'id') {
        return [...props.posts].sort((a, b) => a[filter.sort] - b[filter.sort]);
      } else {
        console.log('string');
        return [...props.posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      }
    } else {
      return props.posts;
    }
  }, [filter.sort, props.posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  return (
    <div>
      {sortedSearchedPosts.length > 0
        ? <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr></hr>
      {sortedSearchedPosts.map((post, index) =>
        <Post remove={props.remove} index={post.id} post={post} key={post.id} />
      )
      }


    </div>
  )
}

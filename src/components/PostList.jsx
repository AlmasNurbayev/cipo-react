import React, { useState, useMemo } from 'react'
import Post from './Post'
import MyInput from './UI/MyInput';
import MySelect from './UI/MySelect'

export default function PostList(props) {

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  //let finalPosts = props.posts;
  
  const sortedPosts = useMemo(()=>{
    console.log('sorting...');
    if (selectedSort) {
      console.log(selectedSort);
      if (selectedSort === 'id') { 
        return [...props.posts].sort((a,b)=> a[selectedSort] - b[selectedSort]);
      } else {
        console.log('string');
        return [...props.posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]));
      }
    } else {
      return props.posts;
    }
  }, [selectedSort, props.posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  function sortPosts(sort) {
    setSelectedSort(sort);
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{props.title}</h1>
      <MyInput          
          value={searchQuery}
          type='text'
          onChange={event => setSearchQuery(event.target.value.toLowerCase())}
          placeholder='Поиск по названию...' />
      <MySelect 
        list={[{value: 'id', name: 'by id'}, {value: 'title',name: 'by title'}, {value: 'body', name: 'by body'}]} 
        default={'sort...'}
        value = {selectedSort}
        onChange = {sortPosts}
      />
      <hr></hr>
      {sortedSearchedPosts.length > 0 
      ? sortedSearchedPosts.map((post, index) => 
        <Post remove={props.remove} index={post.id} post={post} key={post.id}/>
        )
      : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}


    </div>
  )
}

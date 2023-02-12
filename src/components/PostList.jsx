import React, { useState, useMemo } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Post from './Post'
import PostFilter from './PostFilter';
import { usePosts } from '../hooks/usePost';

export default function PostList(props) {


  const [filter, setFilter] = useState({ sort: '', query: '' });
  
  const sortedSearchedPosts = usePosts(props.posts, filter.sort, filter.query);


  return (
    <div>
      {sortedSearchedPosts.length > 0
        ? <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr></hr>
      <TransitionGroup>
        {sortedSearchedPosts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames='post'
            >
          <Post remove={props.remove} index={post.id} post={post} key={post.id} />
          </CSSTransition>
        )
        }
      </TransitionGroup>

    </div>
  )
}

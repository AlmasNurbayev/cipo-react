import React from 'react'
import Post from './Post'

export default function PostList(props) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{props.title}</h1>
      {props.posts.map((post, index) => 
        <Post remove={props.remove} index={index+1} post={post} key={post.id}/>
        )}
    </div>
  )
}

import React from 'react';
import MyButton from './UI/MyButton';

export default function Post(props) {
  return (
      <div className='post'>
        <div className='post__content'>
          <strong>{props.index}. {props.post.title}</strong>
          <div>
          id: {props.post.id}<p/>
          body: {props.post.body}<p/>
          size: {props.post.size}<p/>
          </div>
        </div>
        <div className='post__btns'>
          <MyButton
            onClick={() => props.remove(props.post)}
          >Удалить</MyButton>
        </div>

      </div>


  )
}

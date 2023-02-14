import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/MyButton';

export default function Post(props) {

  const router = useNavigate();
  //console.log(router);


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
            onClick={() => router(`/posts/${props.post.id}`)}
          >Открыть</MyButton>
          <MyButton
            onClick={() => props.remove(props.post)}
          >Удалить</MyButton>
        </div>

      </div>


  )
}

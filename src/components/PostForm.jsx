import React, {useState} from 'react'
import MyInput from './UI/MyInput';
import MyButton from './UI/MyButton';

export default function PostForm(props) {
    const [post, setPost] = useState({title:'', body:'', id:''});

    //const bodyInputRef = useRef(); 
  
    const addNewPost = (event) => {
      event.preventDefault();
      
      const newPost = {...post, id: Date.now()};  
      props.create(newPost);

      setPost({title:'', body:''});
    }    
  return (
    <div>
      <form>
        {/* <MyInput ref={bodyInputRef} type='text' placeholder='название поста' /> */}
        <MyInput
          value={post.title}
          type='text'
          onChange={event => setPost({...post, title: event.target.value})}
          placeholder='название поста' />
        <MyInput
          value={post.body}
          type='text'
          onChange={event => setPost({...post, body: event.target.value})}
          placeholder='описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>        
    </div>
  )
}

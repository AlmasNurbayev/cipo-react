import React, { useRef, useState } from 'react'
//import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import Post from './components/Post';
import PostList from './components/PostList';
import './styles/App.css'
import MyButton from './components/UI/MyButton';
import MyInput from './components/UI/MyInput';
import PostCreate from './components/PostCreate';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'TS', size: '31'},
    { id: 2, title: 'Angular', body: 'MS', size: '32'},
    { id: 3, title: 'Vue', body: 'KS', size: '33'}
  ]);

  function createPost(newPost) {
      setPosts([...posts, {...newPost}]);
  }

  function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostCreate create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список постов:' />
    </div>
  );
}

export default App;

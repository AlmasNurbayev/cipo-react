import React, { useRef, useState } from 'react'
//import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import Post from './components/Post';
import PostList from './components/PostList';
import './styles/App.css'
import MyButton from './components/UI/MyButton';
import MyInput from './components/UI/MyInput';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'TypeScript', body: 'description' },
    { id: 3, title: 'TypeScript 2', body: 'description' }
  ]);

  function createPost(newPost) {
      setPosts([...posts, {...newPost}]);
  }

  function removePost(post) {
      setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      
      {posts.length > 0 
      ? <PostList remove={removePost} posts={posts} title='Список постов:' />
      : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
    </div>
  );
}

export default App;

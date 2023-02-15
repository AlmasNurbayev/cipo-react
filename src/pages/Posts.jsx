import React, { useState, useEffect, useRef } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Post from '../components/Post';
import PostFilter from '../components/PostFilter';
import { usePosts } from '../hooks/usePost';
import { getAll } from './../API/PostApi';
import useFetching from './../hooks/useFetching';
import { getPageCount } from './../utils/pages';
import PostCreate from '../components/PostCreate.jsx';
import MyModal from '../components/UI/MyModal.jsx';
import Loader from '../components/UI/Loader.jsx';
import MyButton from '../components/UI/MyButton';
import usePages from '../hooks/usePages';
import Pages from '../components/UI/Pages';
import classes from '../styles/App.css';
import { useObserver } from '../hooks/useObserver';
 

export default function Posts(props) {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState();
  const sortedSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();


  useEffect(() => { loadingPosts() }, [page]);

  const [loadingPosts, isPostsLoading, postError] = useFetching(async () => {
    console.log(totalPages, page);
    const res = await getAll(limit, page);
    console.log(res.data);
    setPosts([...posts, ...res.data]);
    setTotalPages(getPageCount(res.headers['x-total-count'], limit));
    
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, ()=>{
      setPage(page + 1);
      console.log(page);
    }
  );





  //console.log(totalPages);

  const limitArray = usePages(totalPages, limit);
  //console.log(limitArray);


  function createPost(newPost) {
    setPosts([...posts, { ...newPost }]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  function upLoadPosts(index) {
    setPage(index);
    console.log('receive page from index: ', index);
    console.log('receive page from page: ', page);

  }

  

  return (
    <div className='posts'>
      
      <MyButton style={{marginTop: 20}} onClick={()=>setModal(true)}>Create user</MyButton> 
      {sortedSearchedPosts.length > 0
        ? <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <MyModal visible={modal} setVisible={setModal}>
        <PostCreate create={createPost} />
      </MyModal>
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      }
      <PostFilter filter={filter} setFilter={setFilter} />
      
      <hr></hr>
      <Pages array={limitArray} limit={limit} currentPage={page} onClick={upLoadPosts}/>
      {/* <TransitionGroup> */}
        {sortedSearchedPosts.map((post) =>
          // <CSSTransition
          //   key={post.id}
          //   timeout={500}
          //   classNames='post'
          // // >
            <Post remove={removePost} index={post.id} post={post} key={post.id} />
          // </CSSTransition>
        )
        }
      {/* </TransitionGroup> */}
      <div ref={lastElement} style={{height: 20, background: 'LightGray'}}></div>
    </div>
  )
}

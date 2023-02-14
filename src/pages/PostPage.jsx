import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import { getComments, getOnce } from '../API/PostApi';
import Loader from '../components/UI/Loader';
import Comment from '../components/Comment';

export default function PostPage() {

    const params = useParams();
    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);

    useEffect(() => { 
        loadingPost(params.id);
        loadingComments(params.id);
     }, [params.id]);
    

    const [loadingPost, isPostLoading, postError] = useFetching(async (id) => {
        const res = await getOnce(id);
        setPost(res.data);
    });
    const [loadingComments, isLoadingComment, commentError] = useFetching(async (id) => {
        const res = await getComments(id);
        setComments(res.data);
    });    
        console.log(comments);

    return (
        <div >
            <div className='post'>
            
            {isPostLoading
                 ? <Loader/>
                 : 
                <div  className='post__content'>
                    <h1>{`Страница поста c id: ${params.id}`}</h1>
                    id:{post.id}<p/>
                    title: {post.title}<p/>
                    body: {post.body}<p/>
                </div>
            }
            </div>
            <div className='post'>
            {isLoadingComment
                 ? <Loader/>
                 : 
                <div className='post__content'>
                    <h1>Comments:</h1>
                    {comments.length === 0 
                    ? <p>Нет комментариев</p>
                    : comments.map((comment) => 
                        <Comment comment={comment} key={comment.id}/>)
                    }
                </div>
            }
            </div>

        </div>
    )
}

import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostPage from "../../pages/PostPage";
import Error from "../../pages/Error";

export const routes = [
    {path: '/about', element: About, exact:true},
    {path: '/posts', element: Posts, exact:true},
    {path: '/posts/:id', element: PostPage, exact:true},
    {path: '/', element: PostPage, exact:true},
    {path: '*', element: Error, exact:true},
]
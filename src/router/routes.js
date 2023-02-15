import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact:false},
    {path: '/posts', element: <Posts title='Список постов'/>, exact:true},
    {path: '/posts/:id', element: <PostPage/>, exact:true},
    //{path: '/logout', element: <Logout/>, exact:true},
    {path: '/login', element: <Login/>, exact:true},
    {path: '/', element: <Posts title='Список постов'/>, exact:true},
    {path: '*', element: <Error/>, exact:true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact:false},
    {path: '/about', element: <About/>, exact:false},
    {path: '*', element: <Login/>, exact:true},
]
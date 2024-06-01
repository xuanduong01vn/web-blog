import Home from '../pages/Home/Home.js';
import ReadPost from '../pages/ReadPost/ReadPost.js';
import Login from '../pages/Login/Login.js';
import Register from '../pages/Register/Register.js';
import Profile from '../pages/Account/Profile.js';
import Password from '../pages/Account/Password.js';
import User from '../pages/User/User.js';
import AccountPost from '../pages/Account/AccountPost.js';
import CreatePost from '../pages/CreatePost/CreatePost.js';
import HomeAdmin from '../pages/HomeAdmin/HomeAdmin.js';
import DashboardPost from '../pages/DashboardPost/DashboardPost.js';

const routes=[
  {path: "/", component: Home},
  {path: "/post", component: ReadPost},
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/account/profile", component: Profile},
  {path: "/account/password", component: Password},
  {path: "/user", component: User},
  {path: "/account/post", component: AccountPost},
  {path: "/create/post", component: CreatePost},
  {path: "/dashboard", component: HomeAdmin},
  {path: "/dashboard/posts", component: DashboardPost},
  {path: "/dashboard/questions", component: CreatePost},
  {path: "/dashboard/admins", component: CreatePost},
  {path: "/dashboard/users", component: CreatePost},
  {path: "/dashboard/tags", component: CreatePost},

]

export { routes };
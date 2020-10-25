import React, { useEffect, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles/';
import { ThemeProvider } from '@material-ui/styles/';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from './reducers/notificationReducer';
import { initializeBlogs, createBlog, like } from './reducers/blogReducer';
import { initializeUsers } from './reducers/userReducer';
import { initializeComments } from './reducers/commentReducer';
import { setLoggedUser } from './reducers/loginReducer';
import Navigation from './components/Navigation';
import Users from './pages/userpage/Users';
import User from './pages/userpage/User';
import Blogs from './components/Blogs';
import BlogPage from './pages/blogpage/BlogPage';
import blogService from './services/blogs';
import loginService from './services/login';
import userService from './services/users';
import commentService from './services/comments';
import Notifications from './components/Notifications';
import Toggable from './components/Toggable';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => {
  const matchUser = useRouteMatch('/users/:id');
  const matchBlog = useRouteMatch('/blogs/:id');
  const blogFormRef = useRef();
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);
  const blogs = useSelector((state) => state.blogs.sort((a, b) => b.likes - a.likes));
  const loggedUser = useSelector((state) => state.login);
  const users = useSelector((state) => state.users);
  const comments = useSelector((state) => state.comments);

  const userDetails = matchUser ? users.find((user) => user.id === matchUser.params.id) : null;
  const blogDetails = matchBlog ? blogs.find((blog) => blog.id === matchBlog.params.id) : null;

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  useEffect(() => {
    const initializeApp = async () => {
      const loggedBlogAppUser = window.localStorage.getItem('loggedBlogAppUser');

      if (loggedBlogAppUser) {
        const existingUser = JSON.parse(loggedBlogAppUser);

        dispatch(setLoggedUser(existingUser));
        blogService.setToken(existingUser.token);
      }

      const initialBlogs = await blogService.getAll();
      const allUsers = await userService.getAll();
      const allComments = await commentService.getAll();

      dispatch(initializeBlogs(initialBlogs));
      dispatch(initializeUsers(allUsers));
      dispatch(initializeComments(allComments));
    };

    initializeApp();
  }, [dispatch]);

  const handleComments = async (id) => {
    const blogComments = await commentService.getComment(id);
    dispatch(initializeComments(blogComments));
  };

  const handleNotifications = (message, type) => dispatch(createNotification({ message, type }));

  const handleLogin = async (userCredentials) => {
    try {
      const user = await loginService.login(userCredentials);
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      dispatch(setLoggedUser(user));
    } catch (error) {
      handleNotifications(error.response.data.error, 'error');
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser');
    dispatch(setLoggedUser(null));
  };

  const addBlog = async (newBlog) => {
    try {
      blogFormRef.current.toggleVisibility();
      const blog = await blogService.create(newBlog);
      dispatch(createBlog(blog));
      handleNotifications(`blog "${newBlog.title}" by ${newBlog.author} added`, 'success');
    } catch (error) {
      handleNotifications(`${error.response.data}, blog not added`, 'error');
    }
  };

  const handleLikes = async (blogObject) => {
    const updatedObject = {
      user: blogObject.user.id,
      likes: blogObject.likes + 1,
      author: blogObject.author,
      title: blogObject.title,
      url: blogObject.url,
      id: blogObject.id,
    };

    try {
      const likedBlog = await blogService.update(updatedObject);
      const updatedBlog = {
        ...likedBlog,
        user: blogObject.user,
      };
      dispatch(like(updatedBlog));
    } catch (error) {
      handleNotifications(error.response.data.error, 'error');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className="container" style={{ height: '100vh', borderRadius: 0 }}>
        <Navigation />
        <Notifications notification={notification} />
        {!loggedUser ? (
          <Login login={handleLogin} />
        ) : (
          <>
            <UserInfo handleLogout={handleLogout} loggedUser={loggedUser} />
            <Route path="/users" exact>
              <Users users={users} />
            </Route>
            <Route path="/users/:id">
              <User userDetails={userDetails} />
            </Route>
            <Route>
              <BlogPage
                handleComments={handleComments}
                handleLikes={handleLikes}
                blogDetails={blogDetails}
                comments={comments}
              />
            </Route>
            <Route path="/" exact>
              <Toggable ref={blogFormRef} labelForCreateNew="create new" labelForCancel="cancel">
                <BlogForm createNewBlog={addBlog} />
              </Toggable>
              <Blogs blogs={blogs} />
            </Route>
          </>
        )}
      </Paper>
    </ThemeProvider>
  );
};

export default App;

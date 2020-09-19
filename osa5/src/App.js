import React, { useState, useEffect } from 'react';
import Blogs from './components/Blogs';
import blogService from './services/blogs';
import loginService from './services/login';
import Notifications from './components/Notifications';
import Toggable from './components/Toggable';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import BlogForm from './components/BlogForm';
import './App.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const getAllBlogs = async () => {
      const initialBlogs = await blogService.getAll();
      setBlogs(initialBlogs.sort((a, b) => b.likes - a.likes));
    };
    getAllBlogs();
  }, []);

  useEffect(() => {
    const loggedBlogAppUser = window.localStorage.getItem('loggedBlogAppUser');

    if (loggedBlogAppUser) {
      const user = JSON.parse(loggedBlogAppUser);

      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleNotifications = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleLogin = async (userCredentials) => {
    try {
      const user = await loginService.login(userCredentials);
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
    } catch (error) {
      handleNotifications(error.response.data.error, 'error');
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser');
    setUser(null);
  };

  const addBlog = async (newBlog) => {
    try {
      const blog = await blogService.create(newBlog);
      setBlogs(blogs.concat(blog));
      handleNotifications(`blog "${newBlog.title}" by ${newBlog.author} added`, 'success');
    } catch (error) {
      handleNotifications(`${error.response.data.error}, blog not added`, 'error');
    }
  };

  const handleLikes = async (blogObject) => {
    const likedBlog = await blogService.update(blogObject);
    setBlogs(
      blogs
        .map((blog) => (blog.id === likedBlog.id ? likedBlog : blog))
        .sort((a, b) => b.likes - a.likes)
    );
  };

  const handleDeletes = async (blogObject) => {
    try {
      await blogService.deleteBlog(blogObject);
      setBlogs(blogs.filter((blog) => blog.id !== blogObject.id));
      setNotification({ message: `blog ${blogObject.title} deleted succesfully`, type: 'success' });
    } catch (error) {
      setNotification({ message: error.response.data.error, type: 'error' });
    }
  };

  return (
    <div className="app">
      <h1>blogs</h1>
      <Notifications notification={notification} />
      {!user ? (
        <Login login={handleLogin} />
      ) : (
        <>
          <UserInfo handleLogout={handleLogout} user={user} />
          <Toggable>
            <BlogForm createNewBlog={addBlog} />
          </Toggable>
          <Blogs likes={handleLikes} deleteBlog={handleDeletes} blogs={blogs} user={user} />
        </>
      )}
    </div>
  );
};

export default App;

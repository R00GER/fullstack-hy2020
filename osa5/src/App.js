import React, { useState, useEffect } from 'react';
import Blogs from './components/Blogs';
import blogService from './services/blogs';
import loginService from './services/login';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import BlogForm from './components/BlogForm';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const [user, setUser] = useState(null);
  // katso edellisten tehtävien malliratkaisuista, miten erotetaan 
  // error ja onnistuneen toiminteen notifikaatio
  const [notification, setNotification] = useState('');

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedBlogAppUser = window.localStorage.getItem('loggedBlogAppUser');

    if (loggedBlogAppUser) {
      const user = JSON.parse(loggedBlogAppUser);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleUser = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login(userCredentials);
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUserCredentials({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser');
    setUser(null);
  };

  const handleBlog = (event) => {
    setNewBlog({
      ...newBlog,
      [event.target.name]: event.target.value,
    });
  };

  const createNewBlog = async (event) => {
    event.preventDefault();

    try {
      const blog = await blogService.create(newBlog);
      setBlogs(blogs.concat(blog));
    } catch (error) {
      console.log(error);
    }
  };

  return !user ? (
    <Login
      handleUser={handleUser}
      handleLogin={handleLogin}
      userCredentials={userCredentials}
      user={user}
    />
  ) : (
    <>
      <UserInfo handleLogout={handleLogout} user={user} />
      <BlogForm
        handleBlog={handleBlog}
        createNewBlog={createNewBlog}
        newBlog={newBlog}
      />
      <Blogs blogs={blogs} />
    </>
  );
};

export default App;

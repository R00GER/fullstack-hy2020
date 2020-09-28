import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import blogService from './services/blogs';
import loginService from './services/login';
import ConfirmModal from './components/ConfirmModal';
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
  const [showConfirmDelete, setShowConfirmDelete] = useState({
    show: false,
    blog: null,
  });

  const blogFormRef = useRef();

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
      const existingUser = JSON.parse(loggedBlogAppUser);

      setUser(existingUser);
      blogService.setToken(existingUser.token);
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
      const loggedUser = await loginService.login(userCredentials);
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(loggedUser));
      blogService.setToken(loggedUser.token);
      setUser(loggedUser);
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
      blogFormRef.current.toggleVisibility();
      const blog = await blogService.create(newBlog);
      setBlogs(blogs.concat(blog));
      handleNotifications(`blog "${newBlog.title}" by ${newBlog.author} added`, 'success');
    } catch (error) {
      handleNotifications(`${error.response.data.error}, blog not added`, 'error');
    }
  };

  const handleLikes = async (blogObject) => {
    console.log('clicked from app');
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
        ...updatedObject,
        user: blogObject.user,
      };

      setBlogs(
        blogs
          .map((blog) => (blog.id === likedBlog.id ? updatedBlog : blog))
          .sort((a, b) => b.likes - a.likes),
      );
    } catch (error) {
      handleNotifications(error.response.data.error, 'error');
    }
  };

  const handleDeletes = async (blogObject) => {
    if (blogObject) {
      try {
        await blogService.deleteBlog(blogObject);
        setBlogs(blogs.filter((blog) => blog.id !== blogObject.id));
        handleNotifications(`blog ${blogObject.title} deleted succesfully`, 'success');
        setShowConfirmDelete({ show: !showConfirmDelete.show, blog: null });
      } catch (error) {
        handleNotifications(error.response.data.error, 'error');
      }
    } else {
      setShowConfirmDelete({ show: !showConfirmDelete.show, blog: null });
    }
  };

  const confirmDelete = (blog) => {
    setShowConfirmDelete({ show: !showConfirmDelete.show, blog });
  };

  return (
    <>
      <ConfirmModal
        showConfirmDelete={showConfirmDelete}
        handleDeletes={handleDeletes}
        deleteButtonLabel="delete"
        cancelButtonLabel="cancel"
      />
      <div className="app">
        <Header />
        <Notifications notification={notification} />
        {!user ? (
          <Login login={handleLogin} />
        ) : (
          <>
            <UserInfo handleLogout={handleLogout} user={user} />
            <Toggable ref={blogFormRef} labelForCreateNew="create new" labelForCancel="cancel">
              <BlogForm createNewBlog={addBlog} />
            </Toggable>
            <Blogs likes={handleLikes} confirm={confirmDelete} blogs={blogs} user={user} />
          </>
        )}
      </div>
    </>
  );
};

export default App;

import React, { useState } from 'react';

const BlogForm = ({ createNewBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });

  const handleBlog = (event) => {
    setNewBlog({
      ...newBlog,
      [event.target.name]: event.target.value,
    });
  };

  const addBlog = (event) => {
    event.preventDefault();
    createNewBlog(newBlog);

    setNewBlog({title: '', author: '', url: ''});
  }

  const formStyles = {
    width: '270px',
    marginBottom: '1em',
  };

  const inputStyles = {
    marginBottom: '.2em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <>
      <h2>create new blog</h2>
      <form style={formStyles} onSubmit={addBlog}>
        <div style={inputStyles}>
          <label htmlFor="title">title:</label>
          <input type="text" name="title" value={newBlog.title} onChange={handleBlog} />
        </div>
        <div style={inputStyles}>
          <label htmlFor="author">author:</label>
          <input type="text" name="author" value={newBlog.author} onChange={handleBlog} />
        </div>
        <div style={inputStyles}>
          <label htmlFor="url">url:</label>
          <input type="text" name="url" value={newBlog.url} onChange={handleBlog} />
        </div>
        <div>
          <button className="blog-btn" type="submit">create</button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;

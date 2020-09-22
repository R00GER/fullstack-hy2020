import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

    setNewBlog({ title: '', author: '', url: '' });
  };

  const formStyles = {
    width: '270px',
    marginBottom: '1em',
  };

  const labelStyles = {
    marginBottom: '.2em',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <>
      <h2>create new blog</h2>
      <form style={formStyles} onSubmit={addBlog}>
        <div>
          <label style={labelStyles} htmlFor="title">
            title:
            <input type="text" name="title" value={newBlog.title} onChange={handleBlog} />
          </label>
        </div>
        <div>
          <label style={labelStyles} htmlFor="author">
            author:
            <input type="text" name="author" value={newBlog.author} onChange={handleBlog} />
          </label>
        </div>
        <div>
          <label style={labelStyles} htmlFor="url">
            url:
            <input type="text" name="url" value={newBlog.url} onChange={handleBlog} />
          </label>
        </div>
        <div>
          <button className="blog-btn" type="submit">
            create
          </button>
        </div>
      </form>
    </>
  );
};

BlogForm.propTypes = {
  createNewBlog: PropTypes.func.isRequired,
};

export default BlogForm;

import React from 'react';

const BlogForm = (props) => {
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
      <form style={formStyles} onSubmit={(event) => props.createNewBlog(event)}>
        <div style={inputStyles}>
          <label htmlFor="title">title:</label>
          <input type="text" name="title" value={props.newBlog.title} onChange={(event) => props.handleBlog(event)} />
        </div>
        <div style={inputStyles}>
          <label htmlFor="author">author:</label>
          <input type="text" name="author" value={props.newBlog.author} onChange={(event) => props.handleBlog(event)} />
        </div>
        <div style={inputStyles}>
          <label htmlFor="url">url:</label>
          <input type="text" name="url" value={props.newBlog.url} onChange={(event) => props.handleBlog(event)} />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;

import React, { useState } from 'react';
const Blog = ({ blog, likes, deleteBlog, user }) => {
  const [showBlog, setShowBlog] = useState(false);

  const viewBlog = () => {
    setShowBlog(!showBlog);
  };

  const handleLikes = () => {
    likes(blog);
  };

  const handleDeletes = () => {
    deleteBlog(blog);
  };

  return (
    <div className="blog-container">
      <div className="blog-short">
        <div>{`${blog.title} by ${blog.author}`}</div>
        <button onClick={viewBlog}>{showBlog ? 'hide' : 'view'}</button>
      </div>
      {showBlog && (
        <>
          <div>{blog.url}</div>
          <div className="blog-likes">
            <div>{`likes ${blog.likes}`}</div>
            <button className="like-btn" onClick={handleLikes}>
              like
            </button>
          </div>
          <div>{blog.user.name}</div>
          {user.username === blog.user.username && (
            <button className="remove-btn" onClick={handleDeletes}>
              remove
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;

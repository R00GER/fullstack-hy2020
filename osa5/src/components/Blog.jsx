import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Blog = (
  {
    blog,
    likes,
    confirm,
    user,
  },
) => {
  const [showBlog, setShowBlog] = useState(false);

  const viewBlog = () => {
    setShowBlog(!showBlog);
  };

  const handleLikes = () => {
    likes(blog);
  };

  const handleDeletes = () => {
    confirm(blog);
  };

  return (
    <div className="blog-container">
      <div className="blog-short">
        <div className="blog-short-text">{`${blog.title} by ${blog.author}`}</div>
        <button onClick={viewBlog} type="button">
          {showBlog ? 'hide' : 'view'}
        </button>
      </div>
      {showBlog && (
        <div className="blog-full">
          <div className="blog-full-url">{blog.url}</div>
          <div className="blog-likes-container">
            <div className="blog-full-likes">{`likes ${blog.likes}`}</div>
            <button className="like-btn" type="button" onClick={handleLikes}>
              like
            </button>
          </div>
          <div className="blog-full-user">{blog.user.name}</div>
          {user.username === blog.user.username && (
            <button className="remove-btn" type="button" onClick={handleDeletes}>
              delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.instanceOf(Object).isRequired,
  likes: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

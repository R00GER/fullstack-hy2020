import React from 'react';
import PropTypes from 'prop-types';
import Blog from './Blog';

const Blogs = ({
  blogs, likes, confirm, user,
}) => (
  <div className="blogs">
    {blogs.map((blog) => (
      <Blog key={blog.id} blog={blog} likes={likes} confirm={confirm} user={user} />
    ))}
  </div>
);

Blogs.propTypes = {
  blogs: PropTypes.instanceOf(Object).isRequired,
  likes: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default Blogs;

import React from 'react';
import Blog from './Blog';

const Blogs = ({ blogs, likes, deleteBlog, user }) => {
  return (
    <>
      {blogs.map((blog) => {
        return <Blog key={blog.id} blog={blog} likes={likes} deleteBlog={deleteBlog} user={user} />;
      })}
    </>
  );
};

export default Blogs;

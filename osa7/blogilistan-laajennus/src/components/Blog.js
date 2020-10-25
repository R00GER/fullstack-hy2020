import React from 'react';
import { Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => (
  <div className="blog-container">
    <Button to={`/blogs/${blog.id}`} className="blog-short-text" component={Link}>
      {`${blog.title} by ${blog.author}`}
    </Button>
  </div>
);

export default Blog;

Blog.propTypes = {
  blog: PropTypes.instanceOf(Object).isRequired,
};

import React from 'react';
import { Container } from '@material-ui/core/';
import PropTypes from 'prop-types';
import BlogDetails from './components/BlogDetails';
import Comments from './components/Comments';

const BlogPage = ({ blogDetails, comments, handleLikes }) => {
  if (!blogDetails) {
    return null;
  }

  return (
    <Container className="blog-details-container">
      <BlogDetails blogDetails={blogDetails} handleLikes={handleLikes} />
      <Comments blogDetails={blogDetails} comments={comments} />
    </Container>
  );
};

BlogPage.defaultProps = {
  blogDetails: null,
};

BlogPage.propTypes = {
  blogDetails: PropTypes.instanceOf(Object),
  comments: PropTypes.instanceOf(Array).isRequired,
  handleLikes: PropTypes.func.isRequired,
};

export default BlogPage;

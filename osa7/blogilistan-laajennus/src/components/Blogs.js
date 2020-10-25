import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Container,
  Typography,
} from '@material-ui/core/';
import Blog from './Blog';

const Blogs = ({ blogs }) => (
  blogs.length ? (
    <Container className="blogs">
      {blogs.map((blog) => (
        <Card key={blog.id} variant="outlined">
          <CardContent>
            <Blog blog={blog} />
          </CardContent>
        </Card>
      ))}
    </Container>
  ) : (
    <Container style={{ display: 'flex' }}>
      <Typography>No Blogs</Typography>
      <span role="img" aria-label="sad-emoji">😢</span>
    </Container>
  )
);

Blogs.propTypes = {
  blogs: PropTypes.instanceOf(Object).isRequired,
};

export default Blogs;

import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';

const User = ({ userDetails }) => {
  const styles = {
    userContainer: {
      margin: '1rem 0 1rem 0',
      padding: '1rem',
      backgroundColor: '#515151',
    },
  };

  if (!userDetails) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h6">{userDetails.name}</Typography>
      {userDetails.blogs.map((blog) => (
        <Paper key={blog.id} style={styles.userContainer}>
          <Typography>{blog.title}</Typography>
        </Paper>
      ))}
    </Container>
  );
};

export default User;

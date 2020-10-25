import React from 'react';
import { Typography, Paper, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const BlogDetails = ({ blogDetails, handleLikes }) => {
  const styles = {
    container: {
      margin: '1rem 0 1rem 0',
      padding: '1rem',
      backgroundColor: '#515151',
    },
    likes: {
      display: 'flex',
      alignItems: 'center',
    },
    italic: {
      fontStyle: 'italic',
    },
  };

  const like = () => {
    handleLikes(blogDetails);
  };

  return (
    <>
      <Paper style={styles.container}>
        <div>
          <Typography variant="h6">{blogDetails.title}</Typography>
          <Typography variant="caption">{blogDetails.url}</Typography>
        </div>
        <div className="blog-likes" style={styles.likes}>
          <Typography variant="subtitle1">{blogDetails.likes}</Typography>
          <Button onClick={like}>like</Button>
        </div>
        <Typography variant="body2" style={styles.italic}>{`Added by ${blogDetails.user.name}`}</Typography>
      </Paper>
    </>
  );
};

BlogDetails.propTypes = {
  blogDetails: PropTypes.instanceOf(Object).isRequired,
  handleLikes: PropTypes.func.isRequired,
};

export default BlogDetails;

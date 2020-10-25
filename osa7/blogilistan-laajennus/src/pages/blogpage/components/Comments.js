import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import CommentsForm from './CommentsForm';
import Comment from './Comment';

const Comments = ({ comments, blogDetails }) => {
  const styles = {
    container: {
      margin: '1rem 0 1rem 0',
      padding: '1rem',
      backgroundColor: '#515151',
    },
  };

  return (
    <>
      <Typography>Comments</Typography>
      {comments.map((comment) => (
        comment.blog === blogDetails.id ? (
          <Paper key={comment.id} style={styles.container}>
            <Comment blogDetails={blogDetails} comment={comment} />
          </Paper>
        ) : null))}
      <CommentsForm blogDetails={blogDetails} />
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired,
  blogDetails: PropTypes.instanceOf(Object).isRequired,
};

export default Comments;

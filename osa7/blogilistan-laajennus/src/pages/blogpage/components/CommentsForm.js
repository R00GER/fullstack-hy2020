import React from 'react';
import { TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { createComment } from '../../../reducers/commentReducer';
import useField from '../../../hooks';
import commentService from '../../../services/comments';

const CommentsForm = ({ blogDetails }) => {
  const commentInput = useField('text', 'comment', 'add comment');
  const { reset, ...commentInputProps } = commentInput;

  const dispatch = useDispatch();

  const addComment = async (event) => {
    event.preventDefault();
    const { id } = blogDetails;

    const response = await commentService.create({ blog: id, comment: commentInput.value });
    dispatch(createComment(response));
    commentInput.reset();
  };

  return (
    <form onSubmit={addComment}>
      <TextField {...commentInputProps} />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CommentsForm;

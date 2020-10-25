import React, { useState } from 'react';
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core/';
import PropTypes from 'prop-types';

const BlogForm = ({ createNewBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' });

  const handleBlog = (event) => {
    setNewBlog({
      ...newBlog,
      [event.target.name]: event.target.value,
    });
  };

  const addBlog = (event) => {
    event.preventDefault();
    createNewBlog(newBlog);

    setNewBlog({ title: '', author: '', url: '' });
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1em',
    },
  };

  return (
    <>
      <Typography>Create new blog</Typography>
      <form className="blog-form" onSubmit={addBlog} style={styles.form}>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            className="title"
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleBlog}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="author">Author</InputLabel>
          <Input
            className="author"
            type="text"
            name="author"
            value={newBlog.author}
            onChange={handleBlog}
          />
        </FormControl>
        <FormControl style={{ marginBottom: '1rem' }}>
          <InputLabel htmlFor="url">Url</InputLabel>
          <Input className="url" type="text" name="url" value={newBlog.url} onChange={handleBlog} />
        </FormControl>
        <div>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </div>
      </form>
    </>
  );
};

BlogForm.propTypes = {
  createNewBlog: PropTypes.func.isRequired,
};

export default BlogForm;

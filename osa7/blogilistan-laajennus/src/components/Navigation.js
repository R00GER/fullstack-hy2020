import React from 'react';
import { Container, Button } from '@material-ui/core/';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    navigationItem: {
      fontSize: '1.5rem',
    },
  };

  return (
    <Container style={styles.container}>
      <Button
        style={styles.navigationItem}
        to="/"
        component={Link}
        startIcon={<PostAddIcon style={styles.navigationItem} />}
      >
        Blog app
      </Button>
      <Button style={styles.navigationItem} to="/" component={Link}>
        blogs
      </Button>
      <Button style={styles.navigationItem} to="/users" component={Link}>
        users
      </Button>
    </Container>
  );
};

export default Navigation;

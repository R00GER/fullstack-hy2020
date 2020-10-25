import React from 'react';
import { Container, Typography, Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const UserInfo = ({ handleLogout, loggedUser }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '.5em',
    },
  };

  return (
    <Container style={styles.container}>
      <Typography>
        <strong>
          {loggedUser.name}
          {'\u00A0'}
        </strong>
        logged in
      </Typography>
      <Button
        variant="contained"
        style={{ marginLeft: '.5em' }}
        type="button"
        onClick={() => handleLogout()}
      >
        logout
      </Button>
    </Container>
  );
};

UserInfo.propTypes = {
  loggedUser: PropTypes.instanceOf(Object).isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default UserInfo;

import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PropTypes from 'prop-types';

const Notifications = ({ notification }) => (
  notification ? (
    <Container>
      <Paper
        style={{
          display: 'flex',
          margin: '1rem 0 1rem 0',
          padding: '1rem',
          backgroundColor: '#515151',
        }}
      >
        {notification.type === 'error' ? (
          <ErrorOutlineIcon style={{ marginRight: '.5rem', color: 'red' }} />
        ) : (
          <CheckCircleOutlineIcon style={{ marginRight: '.5rem', color: 'green' }} />
        )}
        <Typography>{!notification ? null : notification.message}</Typography>
      </Paper>
    </Container>
  ) : null
);

Notifications.defaultProps = {
  notification: null,
};

Notifications.propTypes = {
  notification: PropTypes.instanceOf(Object),
};

export default Notifications;

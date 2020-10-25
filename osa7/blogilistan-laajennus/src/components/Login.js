import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core/';
import PropTypes from 'prop-types';

const Login = ({ login }) => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '.2em',
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  const handleUser = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(userCredentials);

    setUserCredentials({ username: '', password: '' });
  };

  return (
    <Container>
      <Typography>Log in to application</Typography>
      <form onSubmit={handleLogin} style={styles.form}>
        <FormControl>
          <InputLabel htmlFor="username" style={{ color: '#fff' }}>
            Username
          </InputLabel>
          <Input
            id="username"
            onChange={handleUser}
            value={userCredentials.username}
            type="text"
            name="username"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password" style={{ color: '#fff' }}>
            Password
          </InputLabel>
          <Input
            id="password"
            onChange={handleUser}
            value={userCredentials.password}
            type="password"
            name="password"
            autoComplete="on"
          />
          <Button type="submit">Log in</Button>
        </FormControl>
      </form>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;

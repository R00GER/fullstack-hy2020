import React from 'react';
import {
  Container,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import User from './User';

const Users = ({ users }) => (
  <TableContainer component={Container}>
    <Typography variant="h6">Users</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell>Blogs created</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Button to={`/users/${user.id}`} component={Link}>{`${user.username}`}</Button>
            </TableCell>
            <TableCell>{user.blogs.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

User.propTypes = {
  users: PropTypes.instanceOf(Array),
};

export default Users;

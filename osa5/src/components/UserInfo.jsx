import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ handleLogout, user }) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '.5em',
  };

  return (
    <div style={containerStyles}>
      <p>
        <strong>
          {user.name}
          {'\u00A0'}
        </strong>
        logged in
      </p>
      <button style={{ marginLeft: '.2em' }} type="button" onClick={() => handleLogout()}>
        logout
      </button>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default UserInfo;

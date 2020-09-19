import React from 'react';

const UserInfo = (props) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ".5em",
  };

  return (
    <div style={containerStyles}>
      <p>
        <strong>{props.user.name}</strong> logged in
      </p>
      <button style={{marginLeft: ".2em"}} onClick={() => props.handleLogout()}>logout</button>
    </div>
  );
};

export default UserInfo;

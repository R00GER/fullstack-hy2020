import React from 'react';

const UserInfo = (props) => {
  // console.log('NAME', props.user.name);
  // console.log('PROPS', props.name);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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

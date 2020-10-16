import React from 'react';

const Notification = ({ notification }) => {
  const notificationStyles = {
    width: '50%',
    border: '1px solid black',
    padding: '1rem',
  }
  
  return (
    notification ? <div style={notificationStyles}>{notification}</div> : null
  )
}

export default Notification;

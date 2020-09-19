import React from 'react';

const Notifications = ({ notification }) => {
  return !notification ? (
    <div className="notifications"></div>
  ) : (
    <div className="notifications">
      <div
        className={
          notification && notification.type === 'success' ? 'success' : 'error'
        }
      >
        {!notification ? null : notification.message}
      </div>
    </div>
  );
};

export default Notifications;

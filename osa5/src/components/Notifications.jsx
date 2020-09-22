import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ notification }) => (
  !notification ? (
    <div className="notifications" />
  ) : (
    <div className="notifications">
      <div className={notification && notification.type === 'success' ? 'success' : 'error'}>
        {!notification ? null : notification.message}
      </div>
    </div>
  ));

Notifications.defaultProps = {
  notification: null,
};

Notifications.propTypes = {
  notification: PropTypes.instanceOf(Object),
};

export default Notifications;

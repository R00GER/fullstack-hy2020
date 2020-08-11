import React from "react";

const Notification = ({ notification, success }) => {

  if (notification === null) {
    return null;
  }

  if (success) {
    return <div className="notification">{notification}</div>;
  } else {
    return <div className="error">{notification}</div>;
  }
};

export default Notification;

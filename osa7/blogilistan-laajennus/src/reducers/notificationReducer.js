const timer = {
  timeout: null,
};

const cancelTimeout = () => {
  clearTimeout(timer.timeout);
};

export const createNotification = (notification) => async (dispatch) => {
  dispatch({
    type: 'CREATE_NOTIFICATION',
    notification,
  });
  cancelTimeout();
  timer.timeout = setTimeout(() => {
    console.log('logged');
    dispatch({
      type: 'RESET_NOTIFICATION',
      notification: null,
    });
  }, 3000);
};

const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'CREATE_NOTIFICATION':
    return action.notification;
  case 'RESET_NOTIFICATION':
    return action.notification;
  default:
    return state;
  }
};

export default notificationReducer;

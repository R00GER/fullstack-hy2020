const timer = {
  timeout: null,
};

export const createVoteNotification = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'VOTE_NOTIFICATION',
      notification,
    });
    cancelTimeout();
    timer.timeout = setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION',
        notification: null,
      });
    }, delay * 1000);
  };
};

export const createAnecdoteNotification = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'NEW_ANECDOTE_NOTIFICATION',
      notification,
    });
    cancelTimeout();
    timer.timeout = setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION',
        notification: null,
      });
    }, delay * 1000);
  };
};

const cancelTimeout = () => {
  clearTimeout(timer.timeout);
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
      return action.notification;
    case 'NEW_ANECDOTE_NOTIFICATION':
      return action.notification;
    case 'RESET_NOTIFICATION':
      return action.notification;
    default:
      return state;
  }
};

export default notificationReducer;

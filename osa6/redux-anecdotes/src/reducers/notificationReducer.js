export const createVoteNotification = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'VOTE_NOTIFICATION',
      notification,
    });
    await wait(delay);
    dispatch({
      type: 'RESET_NOTIFICATION',
      notification: null,
    });
  };
};

export const createAnecdoteNotification = (notification, delay) => {
  return async (dispatch) => {
    dispatch({
      type: 'NEW_ANECDOTE_NOTIFICATION',
      notification,
    });
    await wait(delay);
    dispatch({
      type: 'RESET_NOTIFICATION',
      notification: null,
    });
  };
};

const wait = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay * 1000);
  });

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

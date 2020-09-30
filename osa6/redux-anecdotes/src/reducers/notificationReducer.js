export const createVoteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    anecdote: anecdote.content,
  };
};

export const createAnecdoteNotification = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE_NOTIFICATION',
    anecdote,
  };
};

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
    anecdote: null,
  };
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE_NOTIFICATION':
      return `you voted '${action.anecdote}'`;
    case 'NEW_ANECDOTE_NOTIFICATION':
      return `you created anecdote '${action.anecdote}'`;
    case 'RESET_NOTIFICATION':
      return action.anecdote;
    default:
      return state;
  }
};

export default notificationReducer;

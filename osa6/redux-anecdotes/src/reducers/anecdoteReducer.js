import anecdoteService from '../services/anecdotes';

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.addVote(anecdote);
    dispatch({
      type: 'VOTE',
      votedAnecdote
    })
  }
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNewAnecdote(anecdote);
    dispatch({
      type: 'CREATE_ANECDOTE',
      newAnecdote,
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':
      const votedAnecdote = action.votedAnecdote;
      const id = action.votedAnecdote.id;
      return state.map((anecdote) => (anecdote.id !== id ? anecdote : votedAnecdote));
    case 'CREATE_ANECDOTE':
      return [...state, action.newAnecdote];
    default:
      return state;
  }
};

export default anecdoteReducer;

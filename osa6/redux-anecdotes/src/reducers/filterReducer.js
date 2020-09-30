export const filterAnecdotes = (filter) => {
  return {
    type: 'FILTER',
    filter,
  };
};

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;

export const initializeComments = (comments) => ({ type: 'INIT_COMMENTS', comments });
export const createComment = (comment) => ({ type: 'CREATE_COMMENT', comment });

const commentReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_COMMENTS':
    return action.comments;
  case 'CREATE_COMMENT':
    return [...state, action.comment];
  default:
    return state;
  }
};

export default commentReducer;

export const initializeUsers = (users) => ({ type: 'INIT_USERS', users });

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.users;
  default:
    return state;
  }
};

export default userReducer;

export const setLoggedUser = (user) => ({ type: 'LOG_USER', user });

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'LOG_USER':
    return action.user;
  default:
    return state;
  }
};

export default loginReducer;

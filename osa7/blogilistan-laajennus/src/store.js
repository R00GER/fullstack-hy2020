import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notificationReducer';
import blogReducer from './reducers/blogReducer';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import commentReducer from './reducers/commentReducer';

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogReducer,
  login: loginReducer,
  users: userReducer,
  comments: commentReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;

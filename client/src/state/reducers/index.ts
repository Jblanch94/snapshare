import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;

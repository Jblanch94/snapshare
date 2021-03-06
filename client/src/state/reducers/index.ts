import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;

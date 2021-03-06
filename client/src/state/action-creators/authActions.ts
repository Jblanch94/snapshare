import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { auth } from '../../axios';
import { authTypes } from '../action-types/authTypes';
import { RootState } from '../reducers';

export const signUpUser = (
  formValues: any
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch: Dispatch) => {
    try {
      // make api request to backend to get sign up user
      const response = await auth.post('/register', formValues);
      dispatch({
        type: authTypes.SIGN_UP_USER,
        payload: response.data.accessToken,
      });
      // send off response as payload to reducers
    } catch (err) {
      // if there was a server error dispatch action to update error state
      if (err.response) {
        console.error(err.response.data);
        dispatch({ type: authTypes.AUTH_ERROR, payload: err.response.data });
      }
    }
  };
};

export const loginUser = (
  formValues: any
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await auth.post('/login', formValues);
      dispatch({
        type: authTypes.LOGIN_USER,
        payload: response.data.accessToken,
      });
    } catch (err) {
      dispatch({ type: authTypes.AUTH_ERROR, payload: err.response.data });
    }
  };
};

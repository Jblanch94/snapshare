import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { auth, AxiosUtility } from '../../axios';
import { authTypes } from '../action-types/authTypes';
import { RootState } from '../reducers';

export const signUpUser = (
  formValues: any
): ThunkAction<void, RootState, unknown, Action<string>> => {
  const axios = new AxiosUtility(auth);
  return async (dispatch: Dispatch) => {
    try {
      // make api request to backend to get sign up user
      const response = await axios.post('/register', formValues);
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
  const axios = new AxiosUtility(auth);
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('/login', formValues);
      dispatch({
        type: authTypes.LOGIN_USER,
        payload: response.data.accessToken,
      });
    } catch (err) {
      dispatch({ type: authTypes.AUTH_ERROR, payload: err.response.data });
    }
  };
};

// action creator that retrieves the authentication status of the current user
export const isAuthenticated = () => {
  const axios = new AxiosUtility(auth);
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('/is-authenticated');
      dispatch({ type: authTypes.IS_AUTHENTICATED, payload: response.data });
    } catch (err) {
      // dispatch({ type: authTypes.AUTH_ERROR, payload: err.response.data });
      console.error(err.message);
    }
  };
};

// action creator that refreshes the access token
export const refreshToken = () => {
  const axios = new AxiosUtility(auth);
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('/refresh-token');
      dispatch({
        type: authTypes.REFRESH_TOKEN,
        payload: response.data.accessToken,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

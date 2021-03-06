import { Dispatch, Action } from 'redux';
import { userTypes } from '../action-types/userTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { AxiosUtility, user } from '../../axios';

// action creator to fetch the current user logged in
export const fetchUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch: Dispatch, getState) => {
    user.defaults.headers.common['Authorization'] =
      'Bearer ' + getState().auth.token;
    const axios = new AxiosUtility(user);
    try {
      dispatch({ type: userTypes.LOADING });
      const response = await axios.get('/');
      dispatch({ type: userTypes.FETCH_USER, payload: response.data });
      dispatch({ type: userTypes.FETCH_USER_SUCCESS });
    } catch (err) {
      console.error(err.message);
    }
  };
};

// action creator that updates the loading status
export const loading = () => {
  return {
    type: userTypes.LOADING,
  };
};

// action creator that emits the fetching of the user is complete
export const fetchUserSuccessful = () => {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
  };
};

// action creator to delete user's profile
export const deleteProfile = () => {
  return {
    type: userTypes.DELETE_USER,
  };
};

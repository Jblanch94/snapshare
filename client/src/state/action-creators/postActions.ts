import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosUtility, post } from '../../axios';
import { postTypes } from '../action-types/postTypes';
import { RootState } from '../reducers';

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  const axios = new AxiosUtility(post);
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('/', {
        params: {
          page: 0,
          limit: 10,
        },
      });
      dispatch({ type: postTypes.FETCH_POSTS, payload: response.data });
    } catch (err) {
      console.error(err.message);
    }
  };
};

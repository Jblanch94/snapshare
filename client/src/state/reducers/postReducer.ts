import { postTypes } from '../action-types/postTypes';
import { PostActions, Post } from '../actions/postActions';

interface PostState {
  loading: boolean;
  error: string | null;
  posts: Post[];
}

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

export const postReducer = (
  state: PostState = initialState,
  action: PostActions
) => {
  switch (action.type) {
    case postTypes.FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

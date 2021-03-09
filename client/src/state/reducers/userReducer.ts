import { userTypes } from '../action-types/userTypes';
import { UserActions } from '../actions/userActions';

export interface UserState {
  loading: boolean;
  error: string | null;
  current_user: {
    id: string;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    img: string;
    createdAt: string;
  } | null;
}

const initialState = {
  loading: false,
  error: null,
  current_user: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case userTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
        error: null,
        current_user: action.payload,
      };
    case userTypes.LOADING:
      return { ...state, error: null, loading: true };
    case userTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        current_user: null,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return { ...state, error: null, loading: false };
    case userTypes.DELETE_USER:
      return { ...state, current_user: null, loading: false, error: null };
    default:
      return state;
  }
};

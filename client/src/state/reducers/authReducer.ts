import { authTypes } from '../action-types/authTypes';
import { AuthActions } from '../actions/authActions';

interface AuthState {
  authenticated: boolean;
  token: string | null;
  error: string | null;
}

const initialState = {
  authenticated: false,
  token: null,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
) => {
  switch (action.type) {
    case authTypes.SIGN_UP_USER:
      return {
        ...state,
        authenticated: true,
        token: action.payload,
        error: null,
      };
    case authTypes.LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        token: action.payload,
        error: null,
      };
    case authTypes.IS_AUTHENTICATED:
      return { ...state, authenticated: action.payload, error: null };
    case authTypes.REFRESH_TOKEN:
      return {
        ...state,
        authenticated: true,
        error: null,
        token: action.payload,
      };
    case authTypes.AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { authTypes } from '../action-types/authTypes';

interface SignUpUser {
  type: authTypes.SIGN_UP_USER;
  payload: string;
}

interface LoginUser {
  type: authTypes.LOGIN_USER;
  payload: string;
}

interface AuthError {
  type: authTypes.AUTH_ERROR;
  payload: string;
}

interface IsAuthenticated {
  type: authTypes.IS_AUTHENTICATED;
  payload: boolean;
}

interface RefreshToken {
  type: authTypes.REFRESH_TOKEN;
  payload: string;
}

export type AuthActions =
  | SignUpUser
  | LoginUser
  | AuthError
  | IsAuthenticated
  | RefreshToken;

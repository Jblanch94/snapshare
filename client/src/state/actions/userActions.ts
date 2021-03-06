import { userTypes } from '../action-types/userTypes';

interface FetchUser {
  type: userTypes.FETCH_USER;
  payload: {
    id: string;
    created_at: string;
    first_name: string;
    last_name: string;
    email: string;
    img: string;
    createdAt: string;
  };
}

interface Loading {
  type: userTypes.LOADING;
}

interface UserError {
  type: userTypes.USER_ERROR;
  payload: string | null;
}

interface FetchUserSuccess {
  type: userTypes.FETCH_USER_SUCCESS;
}

interface DeleteUser {
  type: userTypes.DELETE_USER;
}

export type UserActions =
  | FetchUser
  | Loading
  | UserError
  | DeleteUser
  | FetchUserSuccess;

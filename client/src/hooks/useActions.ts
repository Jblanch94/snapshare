import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import actionCreators from '../state/';

export const useActions = () => {
  const dispatch = useDispatch();
  const authActions = bindActionCreators(actionCreators.authActions, dispatch);
  const userActions = bindActionCreators(actionCreators.userActions, dispatch);
  return { authActions, userActions };
};

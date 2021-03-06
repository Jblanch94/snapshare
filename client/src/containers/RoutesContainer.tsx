import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Routes from '../components/Routes';
import { useActions } from '../hooks/useActions';

const RoutesContainer = () => {
  const { token, authenticated } = useTypedSelector((state) => state.auth);
  const { authActions } = useActions();
  useEffect(() => {
    if (!token) {
      authActions.refreshToken();
    }
  }, [authActions, token]);
  return <Routes authenticated={authenticated} />;
};

export default RoutesContainer;

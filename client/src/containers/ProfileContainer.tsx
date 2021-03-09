import { useEffect, useRef } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { UserState } from '../state/reducers/userReducer';
import Profile from '../components/pages/Profile/Profile';

const ProfileContainer = () => {
  const { userActions } = useActions();
  const user = useTypedSelector((state) => state.user);
  const { fetchUser } = userActions;
  const userRef = useRef<UserState | null>(null);

  // Make http request to get the user's profile of the currently logged in user
  useEffect(() => {
    if (!userRef.current) {
      fetchUser();
    }

    userRef.current = user;
  }, [fetchUser, user]);

  return <Profile {...user} />;
};

export default ProfileContainer;

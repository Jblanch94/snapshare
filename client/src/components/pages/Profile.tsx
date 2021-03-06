import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Profile = () => {
  const { userActions } = useActions();
  const user = useTypedSelector((state) => state.user);
  const { fetchUser } = userActions;
  console.log(user);

  useEffect(() => {
    if (!user.current_user) {
      fetchUser();
    }
  }, []);

  return <h1>Profile Page</h1>;
};

export default Profile;

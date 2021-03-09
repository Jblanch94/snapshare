import ProfileNav from '../../ui/ProfileNav';
import { UserState } from '../../../state/reducers/userReducer';
import { monthNumberToWord } from '../../../utils/date';

const Profile: React.FC<UserState> = (props) => {
  console.log(props);
  let joined, month, day, year;
  if (props.current_user?.createdAt) {
    joined = new Date(props.current_user?.createdAt);
    [month, day, year] = joined.toLocaleDateString().split('/');
  }

  const monthWord = monthNumberToWord(parseInt(month as string));

  return (
    <>
      <section className="bg-profileCover bg-cover bg-no-repeat flex justify-between w-full h-40 items-end">
        <div className="flex p-8 items-center">
          <img
            alt="Profile"
            src={
              props.current_user?.img === ''
                ? 'https://i.pravatar.cc/100'
                : props.current_user?.img
            }
            className="rounded-full"
          />
          <h3 className="text-3xl pl-4 text-white">{`${props.current_user?.first_name} ${props.current_user?.last_name}`}</h3>
        </div>
        {joined && (
          <h6 className="text-2xl p-8 text-white">
            Joined {monthWord} {year}
          </h6>
        )}
      </section>
      <ProfileNav />
    </>
  );
};

export default Profile;

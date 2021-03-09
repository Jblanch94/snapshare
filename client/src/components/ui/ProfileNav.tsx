import { NavLink } from 'react-router-dom';

const ProfileNav: React.FC = () => {
  return (
    <nav className="mt-6">
      <ul className="flex justify-center items-center">
        <li className="text-center p-2 mx-6">
          <NavLink
            exact
            to="/profile/about"
            className="text-2xl hover:text-link"
            activeClassName="border-b-2 border-solid border-inputFocused pb-2">
            About
          </NavLink>
        </li>
        <li className="text-center p-2 mx-6">
          <NavLink
            exact
            to="/profile/favorites"
            className="text-2xl hover:text-link"
            activeClassName="border-b-2 border-solid border-inputFocused pb-2">
            Favorites
          </NavLink>
        </li>
        <li className="text-center p-2 mx-6">
          <NavLink
            exact
            to="/profile/albums"
            className="text-2xl hover:text-link"
            activeClassName="border-b-2 border-solid border-inputFocused pb-2">
            Albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;

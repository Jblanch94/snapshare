import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-64 py-2 bg-black bg-opacity-70 text-primary fixed top-0 left-0 right-0">
      <h1 className="text-4xl font-bold tracking-wide cursor-pointer hover:text-secondary uppercase transition duration-500 ease-in-out">
        Snapshare
      </h1>
      <nav>
        <ul className="flex items-center">
          <li className=" m-4 px-3 py-1 text-center">
            <NavLink
              exact
              activeClassName="border-b-2 border-solid border-secondary pb-1"
              to="/"
              className="text-lg hover:text-secondary transition duration-500 ease-in-out focus:ring focus:ring-white">
              Home
            </NavLink>
          </li>
          <li className="text-center px-3 py-1 m-4">
            <NavLink
              exact
              activeClassName="border-b-2 border-solid border-secondary pb-1"
              to="/login"
              className="text-lg hover:text-secondary transition duration-500 ease-in-out focus:ring focus:ring-white">
              Login
            </NavLink>
          </li>
          <li className="text-center px-3 py-1 m-4">
            <NavLink
              exact
              activeClassName="border-b-2 border-solid border-secondary pb-1"
              to="/sign-up"
              className="text-lg hover:text-secondary transition duration-500 ease-in-out focus:ring focus:ring-white">
              Sign Up
            </NavLink>
          </li>
          <li className="text-center px-3 py-1 m-4">
            <NavLink
              exact
              to="/explore"
              className="text-lg hover:text-secondary transition duration-500 ease-in-out focus:ring focus:ring-white"
              activeClassName="border-b-2 border-solid border-secondary pb-1">
              Explore
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

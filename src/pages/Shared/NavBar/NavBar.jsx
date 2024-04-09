import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar pt-4 pb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add A Toys</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">PlayHive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a>All Toys</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add A Toys</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/login" className="btn ms-3  ">
            Sign Up/Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

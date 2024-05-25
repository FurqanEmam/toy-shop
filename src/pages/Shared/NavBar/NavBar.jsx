import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { SlLogout } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>

      {user?.email ? (
        <>
          <div>
            <li>
              <Link to="/cart">My Toys</Link>
            </li>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );

  const handleLogOut = () => {
    logout()
      .then(localStorage.removeItem("playhive-access-token"))
      .catch((error) => console.log(error));
  };

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
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            PlayHive
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <>
              <div>
                <SlLogout />
              </div>
              <button onClick={handleLogOut} className="btn ms-3  ">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn ms-3  ">
                <CiLogin />
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

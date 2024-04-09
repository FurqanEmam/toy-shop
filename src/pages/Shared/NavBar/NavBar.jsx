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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">PlayHive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
            <li>
              <a>Home</a>
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
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className=" input input-bordered w-24 md:w-auto"
            />
          </div>
          <a className="btn ms-3  ">Sign Up/Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

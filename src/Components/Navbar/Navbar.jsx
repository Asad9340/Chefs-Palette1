import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <div className="navbar bg-base-100 py-4 md:py-6 mx-3 md:mx-6">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className=" text-xl md:text-3xl font-bold">
            Chefs<span className="text-[#0BE58A]">P</span>alette
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-slate-900 text-opacity-70 ">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="relative">
            <input
              type="text"
              className="border border-red-800 h-10 rounded-full hidden md:block pl-10"
              name=""
              placeholder="Search here..."
            />
            <CiSearch className="absolute top-3 left-4 text-lg  hidden md:block" />
          </div>
          <CgProfile className="text-4xl bg-[#0BE58A] p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

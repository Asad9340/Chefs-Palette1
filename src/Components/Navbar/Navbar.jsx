import { CgProfile } from 'react-icons/cg';
function Navbar() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold">Chefs Palette</span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <div className="flex grow justify-end">
            <input
              className="flex h-10  rounded-full bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search items"
            />
          </div>
          <div className="ml-2 mt-2 hidden lg:block bg-[#0BE58A] rounded-full p-2">
            <CgProfile className="text-xl" />
          </div>
        </div>
        <div className="ml-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

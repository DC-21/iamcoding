import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:px-10 px-6 py-4 flex w-full gap-2 justify-between items-center text-white bg-[#06031d] sticky top-0 bg-opacity-100 z-50 backdrop-blur-md">
      <Link to="/" className="md:text-3xl text-2xl font-bold text-green-500">
        i<span className="text-white">amcoding</span>
      </Link>
      <div className="p-2 md:flex hidden justify-center items-center bg-white text-slate-950 rounded">
        <input
          className="rounded outline-none"
          placeholder="search"
          type="text"
        />
        <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="md:hidden flex gap-2">
        <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="2em"
          width="2em"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <a className=" font-normal hover:underline" href="">
          Learn
        </a>
        <a className=" font-normal hover:underline" href="">
          BootCamps
        </a>
        <a className=" font-normal hover:underline" href="">
          Teach
        </a>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <a href="">Register</a>
        <Link
          to="/login"
          className="bg-green-600 hover:bg-green-500 p-3 rounded-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

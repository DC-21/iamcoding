const Navbar = () => {
  return (
    <nav className="p-6 flex w-full justify-between text-white bg-[#06031d] sticky top-0 bg-opacity-100 z-50 backdrop-blur-md">
      <a className="text-3xl font-bold text-green-500" href="">
        i<span className="text-white">amcoding</span>
      </a>
      <div className="flex gap-4 items-center">
        <a className=" font-normal" href="">
          learn
        </a>
        <a className=" font-normal" href="">
          bootcamps
        </a>
        <a className=" font-normal" href="">
          teach
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

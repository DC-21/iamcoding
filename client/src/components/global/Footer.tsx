const Footer = () => {
  return (
    <footer className="md:px-10 px-6 py-4 w-full h-auto flex flex-col bg-[#06031d]">
      <div className="w-full grid md:grid-cols-5">
        <div>
          <a href="">Teach on iamcoding</a>
          <a href="">Get Our App</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <a className="md:text-3xl text-2xl font-bold text-green-500" href="">
          i<span className="text-white">amcoding</span>
        </a>
        <a className="text-gray-300" href="">
          Copyright © 2024 iamcoding, Inc.
        </a>
      </div>
    </footer>
  );
};

export default Footer;

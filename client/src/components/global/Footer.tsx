const Footer = () => {
  return (
    <footer className="md:px-10 px-6 py-4 w-full h-auto flex flex-col bg-[#06031d]">
      <div className="w-full grid md:grid-cols-5">
        <div className="w-full flex flex-col text-gray-400 gap-2">
          <a href="">Teach at iamcoding</a>
          <a href="">Get Our App</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="w-full flex flex-col text-gray-400 gap-2">
          <a href="">Blog</a>
          <a href="">Help and Support</a>
          <a href="">Affiliate</a>
          <a href="">Report</a>
        </div>
        <div className="w-full flex flex-col text-gray-400 gap-2">
          <a href="">Terms and Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Partners</a>
          <a href="">FAQs</a>
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
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

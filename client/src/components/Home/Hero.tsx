import bg from "../../assets/software.jpg";

const Hero = () => {
  return (
    <section className="">
      <div className="min-h-screen flex w-full p-10 bg-slate-950 justify-center items-center">
        <div className="w-full flex justify-center px-24">
          <div className="w-full flex justify-center items-center p-4 gap-4 bg-white rounded shadow-sm shadow-gray-600">
            <a href="">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 10 A7 7 0 0 1 10 17 A7 7 0 0 1 3 10 A7 7 0 0 1 17 10 z" />
                <path d="M21 21l-6-6" />
              </svg>
            </a>
            <input
              placeholder="search"
              className="p-3 outline-none rounded w-full text-lg text-slate-950"
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

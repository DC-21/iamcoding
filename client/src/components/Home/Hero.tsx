import img2 from "../../assets/img2.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img2})` }}
      className="bg-cover object-cover bg-no-repeat bg-center text-white"
    >
      <div className="min-h-screen flex w-full p-10 bg-slate-950 bg-opacity-60 backdrop:blur-2x  justify-center items-center">
        <div className="text-white w-full grid grid-cols-2 justify-center">
          <div className="w-full flex flex-col">
            <p className="text-[55px] font-bold">
              Find the best tutor for free
            </p>
            <p>
              Time waits for nobody and code waits for no programmer. Get
              started right now and find the perfect course that suits your
              liking....
            </p>
            <div className="w-full gap-6 pt-4 flex">
              <button className="p-3 bg-[#040713] rounded">Start Coding</button>

              <button className="p-3 bg-green-600 rounded">
                Start Tutoring
              </button>
            </div>
          </div>
          <div>
            {/* <img
              className="rounded-2xl shadow-2xl shadow-gray-500"
              src={img2}
              alt="img2"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

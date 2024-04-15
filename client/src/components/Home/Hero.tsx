import img2 from "../../assets/img2.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img2})` }}
      className="bg-cover object-cover bg-no-repeat bg-center text-white"
    >
      <div className="min-h-screen flex w-full p-10 bg-slate-950 bg-opacity-60 backdrop:blur-2x  justify-center items-center">
        <div className="text-white w-full grid md:grid-cols-2 grid-cols-1 justify-center">
          <div className="w-full flex flex-col">
            <p className="md:text-[55px] text-3xl font-bold md:text-start text-center max-w-3xl">
              Find the best tutor for free
            </p>
            <p className="md:pt-6 pt-2 lg:max-w-xl md:text-start text-center">
              Time waits for nobody and code waits for no programmer. Get
              started right now and find the perfect course that suits your
              liking....
            </p>
            <div className="w-full gap-6 pt-4 flex md:justify-start justify-center">
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

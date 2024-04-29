import bootcamp from "../../assets/bootcamp.jpg";

const Bootcamps = () => {
  return (
    <div className="md:px-10 px-6 py-10 w-full min-h-screen flex-col justify-center items-center flex">
      <p className="md:text-[55px] text-[35px] font-bold text-[#06031d]">
        BootCamps For You
      </p>
      <div className="md:p-6 p-2 grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full gap-6">
        <img
          className="p-4 shadow shadow-black rounded-2xl"
          src={bootcamp}
          alt="bootcamp"
        />
        <div className="p-3 w-full">
          <p className="text-3xl md:flex hidden text-slate-950 max-w-lg">
            We bring you closer to world class bootcamps
          </p>
          <div className="flex w-full md:justify-start justify-center mt-4">
            <button className="p-3 shadow shadow-gray-900 rounded-lg hover:rounded-xl bg-[#7d1af0] text-white text-lg hover:shadow-gray-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;

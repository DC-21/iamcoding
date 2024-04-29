import bootcamp from "../../assets/bootcamp.jpg";

const Bootcamps = () => {
  return (
    <div className="md:px-10 px-6 py-10 w-full min-h-screen flex-col justify-center items-center flex">
      <p className="md:text-[55px] text-[35px] font-bold text-[#06031d]">
        BootCamps For You
      </p>
      <div className="p-6 grid grid-cols-2 justify-center items-center w-full gap-6">
        <img
          className="p-4 shadow shadow-black rounded-2xl"
          src={bootcamp}
          alt="bootcamp"
        />
        <div>
          <p>We bring you closer to world class bootcamps</p>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;

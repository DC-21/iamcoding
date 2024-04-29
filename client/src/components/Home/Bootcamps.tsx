import bootcamp from "../../assets/bootcamp.jpg";

const Bootcamps = () => {
  return (
    <div className="md:px-10 px-6 py-10 w-full min-h-screen flex-col justify-center items-center flex">
      <p className="md:text-[55px] text-[35px] font-bold text-[#06031d]">
        BootCamps For You
      </p>
      <div>
        <img src={bootcamp} alt="bootcamp" />
      </div>
    </div>
  );
};

export default Bootcamps;

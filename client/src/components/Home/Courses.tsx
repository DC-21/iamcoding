import img from "../../assets/dev.jpg";

const Courses = () => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-[#5b5f72] items-center justify-center md:p-10 p-6 md:py-10 py-16">
      <p className="text-white md:text-[55px] text-[35px] font-bold">
        Top Courses
      </p>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex justify-between">
          <p>Programming</p>
          <a className="flex justify-center items-center gap-2" href="">
            <p>See more </p>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
              />
            </svg>
          </a>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 pt-4 gap-8">
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:h-80 h-auto rounded-xl overflow-hidden border border-slate-950">
            <img className="object-cover h-52 w-full" src={img} alt="" />
            <div className="w-full text-white flex flex-col bg-slate-900 p-4">
              <p className="text-[16px]">
                Fullstack web developer course, Learn by doing
              </p>
              <p className="text-gray-400 text-[10px]">Dr. CODE</p>
              <p className="text-[14px]">4.7</p>
              <p className="text-[14px]">Free Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

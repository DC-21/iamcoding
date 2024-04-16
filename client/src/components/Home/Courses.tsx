import img from "../../assets/dev.jpg";

const Courses = () => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-[#5b5f72] items-center justify-center md:p-10 p-4">
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
        <div className="w-full grid md:grid-cols-5 grid-cols-1 pt-4 gap-4">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="w-full bg-cover object-cover group  bg-center h-96 rounded-lg relative overflow-hidden"
          >
            <div className="w-full text-white flex flex-col absolute -bottom-2/4 p-4 group-hover:bottom-0 delay-150 duration-500 bg-slate-900">
              <p>Web Dev</p>
              <p>Dr CODE.</p>
              <p>4.7</p>
              <p>Free Course</p>
              <p className="text-[12px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur adipisci corporis dolores ab soluta doloremque quod
                a nostrum, deleniti cupiditate omnis, id vero, tempora quibusdam
                alias laudantium facere necessitatibus quam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

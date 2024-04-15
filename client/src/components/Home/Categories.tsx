import programming from "../../assets/programming(1).png";
import iot from "../../assets/iot(1).png";
import cloud_computing from "../../assets/cloud-computing.png";

const Categories = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="flex w-full flex-col justify-center items-center md:p-10 p-4">
        <p className="md:text-[55px] font-bold text-[#06031d]">
          Our Categories
        </p>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-6">
            <img src={programming} className=" w-40 h-36" alt="programming" />
            <p className="text-bold pt-2">Programming</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={iot} className=" w-40 h-36" alt="iot" />
            <p>IoT</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={cloud_computing} className=" w-40 h-36" alt="iot" />
            <p>Cloud Computing</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>AI</p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Machine Learning</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Data Science</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Networking</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Graphics and Design</p>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Cyber Security</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Blockchain</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Digital Banking</p>
          </div>
          <div className="w-full rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <p>Cryptography</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

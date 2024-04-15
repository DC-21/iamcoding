import programming from "../../assets/programming(1).png";
import iot from "../../assets/iot(1).png";
import cloud_computing from "../../assets/cloud-computing.png";
import ai from "../../assets/ai.png";

import ml from "../../assets/coding.png";
import dt from "../../assets/data-science.png";
import networking from "../../assets/circle.png";
import graphics from "../../assets/graphic-design.png";

import security from "../../assets/security.png";
import blockchain from "../../assets/blockchain.png";
import payment from "../../assets/payment.png";
import cryptography from "../../assets/private-key.png";

const Categories = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="flex w-full flex-col justify-center items-center md:p-10 p-4">
        <p className="md:text-[55px] text-[35px] font-bold text-[#06031d]">
          Our Categories
        </p>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-6">
            <img src={programming} className=" w-40 h-36" alt="programming" />
            <p className="text-bold pt-2">Programming</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={iot} className=" w-40 h-36" alt="iot" />
            <p className="text-bold pt-2">IoT</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={cloud_computing} className=" w-40 h-36" alt="cloud" />
            <p className="text-bold pt-2">Cloud Computing</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={ai} className=" w-40 h-36" alt="ai" />
            <p className="text-bold pt-2">AI</p>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={ml} className="w-40 h-36" alt="ml" />
            <p className="pt-2">Machine Learning</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={dt} className="w-40 h-36" alt="dt" />
            <p className="pt-2">Data Science</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={networking} className="w-40 h-36" alt="networking" />
            <p className="pt-2">Networking</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={graphics} className="w-40 h-36" alt="graphics" />
            <p className="pt-2">Graphics and Design</p>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6 pt-4">
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={security} className="w-40 h-36" alt="security" />
            <p className="pt-2">Cyber Security</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={blockchain} className="w-40 h-36" alt="blockchain" />
            <p className="pt-2">Blockchain</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={payment} className="w-40 h-36" alt="payment" />
            <p className="pt-2">Digital Banking</p>
          </div>
          <div className="w-full cursor-pointer hover:shadow-xl hover:shadow-slate-60 rounded-2xl border border-slate-950 shadow-sm shadow-slate-950 justify-center items-center flex flex-col p-3">
            <img src={cryptography} className="w-40 h-36" alt="cryptography" />
            <p className="pt-2">Cryptography</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

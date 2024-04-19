const SignUp = () => {
  return (
    <section
      style={{
        backgroundColor: "#2D131A",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%232D131A' width='11' height='11'/%3E%3Crect fill='%232d131a' x='10' width='11' height='11'/%3E%3Crect fill='%232c131a' y='10' width='11' height='11'/%3E%3Crect fill='%232c131b' x='20' width='11' height='11'/%3E%3Crect fill='%232b121b' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%232b121b' y='20' width='11' height='11'/%3E%3Crect fill='%232a121b' x='30' width='11' height='11'/%3E%3Crect fill='%232a121b' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%2329121c' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2329121c' y='30' width='11' height='11'/%3E%3Crect fill='%2328121c' x='40' width='11' height='11'/%3E%3Crect fill='%2328121c' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2327121c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2327111c' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2326111c' y='40' width='11' height='11'/%3E%3Crect fill='%2326111d' x='50' width='11' height='11'/%3E%3Crect fill='%2325111d' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2325111d' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2324111d' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%2324111d' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%2323111d' y='50' width='11' height='11'/%3E%3Crect fill='%2322111d' x='60' width='11' height='11'/%3E%3Crect fill='%2322111d' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%2321111d' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%2321111d' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%2320101d' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%2320101d' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%231f101d' x='70' width='11' height='11'/%3E%3Crect fill='%231f101d' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%231e101d' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%231d101d' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%231d101d' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%231c101d' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%231c0f1d' x='80' width='11' height='11'/%3E%3Crect fill='%231b0f1d' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%231b0f1d' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%231a0f1d' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%231a0f1d' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23190f1d' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23180f1d' x='90' width='11' height='11'/%3E%3Crect fill='%23180e1d' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23170e1d' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23170e1d' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23160e1d' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23150e1d' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23150e1c' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23140d1c' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23130d1c' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23130d1c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23120d1c' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23110d1c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23110d1c' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23100c1b' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%230f0c1b' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230e0c1b' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%230e0c1b' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%230d0c1b' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%230c0b1a' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%230b0b1a' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%230A0B1A' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="bg-cover bg-center flex w-full"
    >
      <div className="md:p-10 p-6 flex flex-col w-full min-h-screen text-white justify-center items-center">
        <div className=" w-1/2 border border-white rounded flex">
          <form className="  w-full flex flex-col p-4 justify-center items-center">
            <p className="text-lg">Sign Up To Get Started</p>
            <div className="w-full flex flex-col mt-4">
              <input
                className="p-3 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="username"
                type="text"
              />
              <input
                className="p-3 mt-4 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="firstname"
                type="text"
              />
              <input
                className="p-3 mt-4 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="lastname"
                type="text"
              />
              <input
                className="p-3 mt-4 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="email"
                type="email"
              />
              <input
                className="p-3 mt-4 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="password"
                type="password"
              />
              <input
                className="p-3 mt-4 rounded bg-gray-300 outline-none text-slate-950"
                placeholder="comfirm password"
                type="password"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

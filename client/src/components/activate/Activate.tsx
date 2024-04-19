import { useState } from "react";

const Activate = () => {
  const [inputs, setInputs] = useState(Array(6).fill(""));

  const handleInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;

    // Move focus to the next input field if a digit is entered
    if (value.length === 1 && index < inputs.length - 1) {
      const nextIndex = index + 1;
      const nextInput = document.getElementById(`input-${nextIndex}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    setInputs(newInputs);
  };

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
        <form className="rounded w-96 border p-4 border-white">
          <p className="text-center">
            We sent you a comfirmation code via email, enter it to activate
            account.
          </p>
          <div className="w-full grid grid-cols-6 gap-2 p-4 px-8 text-slate-950">
            {inputs.map((value, index) => (
              <input
                key={index}
                id={`input-${index}`}
                className="p-3 border-white border-2 bg-gray-400 rounded text-center"
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInput(index, e.target.value)}
              />
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Activate;

import bg from "../../assets/software.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover object-cover bg-no-repeat"
    >
      <div className="min-h-screen flex w-full bg-slate-950 bg-opacity-60 backdrop:blur-2x"></div>
    </section>
  );
};

export default Hero;

import BgImage from "../assets/bg.png"

const About = () => {
  return (
    <section style={{backgroundImage:`url(${BgImage})`}} className='bg-center bg-cover'>
      <div className="w-full h-full bg-[#eb3535bd] py-52 flex items-center justify-center flex-col">
        <p className="text-white text-3xl md:w-[60%] font-bold text-center font-mono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{" "}
        </p>
        <h1 className="text-5xl text-white my-5 font-serif">Barry Henderson</h1>
      </div>
    </section>
  );
};

export default About;

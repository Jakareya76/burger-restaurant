import HeroImage from "../assets/hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <main
      className="w-full pb-[120px] mt-[-5rem] flex bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="container mx-auto flex mt-[10rem] justify-center md:justify-start">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="text-4xl md:text-5xl xl:text-8xl text-white font-bold text-center md:text-left">
            Get Cashback <br /> up to 50%
          </h1>
          <p className="text-sm sm:text-md md:text-lg md:ml-2 font-[Roboto] text-[#e6ece9] my-7 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Suspendisse consectetur <br /> justo eu nunc consequat.
          </p>
          <Button width="w-52" color="bg-red-500" textColor="text-white">Order Now</Button>
        </div>
        {/* <div className="w-[40%]"></div> */}
      </div>
    </main>
  );
};

export default Hero;

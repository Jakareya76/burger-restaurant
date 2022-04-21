import DesignTow from "../assets/Design-2.png";
import BigBurgersImage from "../assets/bestburger.png";
import Button from "./Button";

const BigBurger = () => {
  return (
    <section
      className="bg-fixed bg-center bg-cover py-16 grid place-items-center"
      style={{ backgroundImage: `url(${DesignTow})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-left text-center md:text-5xl font-bold text-red-400">
            Big Burger
          </h1>
          <p className="text-lg text-red-400 font-[Roboto] my-5 md:text-left text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <Button width="w-52" color="bg-red-500" textColor="text-white">
            Order Now
          </Button>
        </div>
        <div>
          <img
            src={BigBurgersImage}
            className="w-72 mt-5 md:mt-0 md:w-96"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BigBurger;

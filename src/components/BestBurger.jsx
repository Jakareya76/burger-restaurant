import BestBurgerImage from "../assets/bestburger.png";
import Button from "./Button";

const BestBurger = () => {
  return (
    <section className="w-full h-full bg-red-500 py-16 grid place-items-center">
      <div className="container mx-auto flex items-center justify-center flex-col md:flex-row ">
        <div className="w-1/2 flex items-center justify-center">
          <img className="w-96" src={BestBurgerImage} alt="" />
        </div>
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h1 className="text-xl md:text-5xl xl:text-6xl text-white font-bold text-center md:text-left">
            Best Burger
          </h1>
          <p className="text-white font-[Roboto] my-5 text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum.{" "}
          </p>
          <Button width="w-52" color="bg-white" textColor="text-red-500">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestBurger;

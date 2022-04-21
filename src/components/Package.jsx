import BackgroundIMage from "../assets/Design.png";
import Icon from "../assets/Icon.png";
import Button from "./Button";

const Package = () => {
  const CardData = [
    {
      name: "Package I",
      image: Icon,
      price: "$10.00",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Package II",
      image: Icon,
      price: "$20.00",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Package III",
      image: Icon,
      price: "$30.00",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section
      className="w-full h-full py-20 px-5 bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${BackgroundIMage})` }}
    >
      <div className="container mx-auto">
        <h1 className="text-center text-4xl text-red-500 font-semibold md:text-5xl xl:text-6xl">
          Popular Package
        </h1>
        <div className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 xl:grid-cols-3 md:mt-20">
          {CardData.map((curElem, index) => {
            return (
              <div className="bg-white w-72 flex flex-col items-center justify-center p-6 space-y-3 rounded-lg my-10" key={index}>
                <h1 className="text-red-500 font-bold text-3xl">
                  {curElem.name}
                </h1>
                <img src={curElem.image} alt="" />
                <h4 className="text-red-500 font-bold text-2xl font-serif">
                  {curElem.price}
                </h4>
                <p className="text-center text-red-500 font[Roboto]">
                  {curElem.title}
                </p>
                <Button color="bg-red-500" textColor="text-white">
                  ORDER NOW
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Package;

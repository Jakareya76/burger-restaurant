import Design from "../assets/Design.png";
import ModelOne from "../assets/model-1.png";
import ModelTow from "../assets/model-2.png";
import ModelThree from "../assets/model-3.png";

const Chef = () => {
  const ChefData = [
    {
      name: "Aiden Hunter",
      title: "Founder",
      img: ModelOne,
    },
    {
      name: "Ethel Ramsey",
      title: "Co-Founder",
      img: ModelTow,
    },
    {
      name: "Fannie Stewart",
      title: "Co-Founder",
      img: ModelThree,
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-[80px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Design})` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-red-400 font-bold text-2xl md:text-5xl">
          Our Chef
        </h1>
        <p className="text-sm sm:text-md md:text-lg text-center text-red-400 font-semibold my-2 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{" "}
        </p>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 place-items-center py-16">
          {ChefData.map((curElem, index) => {
            return (
              <div key={index}>
                <img src={curElem.img} alt="" />
                <h1 className="text-center my-2 text-red-400 font-bold text-xl">
                  {curElem.name}
                </h1>
                <p className="text-center text-red-400 font-semibold text-lg">
                  {curElem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Chef;

import BackgroundDesign from "../assets/Design.png";

const Email = () => {
  return (
    <section style={{ backgroundImage: `url(${BackgroundDesign})` }} className='py-40 bg-center bg-cover bg-fixed'>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-center text-red-400 text-5xl font-semibold md:text-6xl">Don’t miss Our Update</h1>
        <p className="text-center text-red-400 text-xl md:w-[50%] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{" "}
        </p>
        <div className="flex mt-6">
            <input className="py-2 px-6 md:w-96 rounded-l-full outline-none" type="text" placeholder="Email" />
            <button className="bg-red-400 px-10 text-white rounded-r-full font-semibold">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Email;

const Statistics = () => {
  const StatisticsData = [
    {
      count: "7k",
      title: "Customer",
    },
    {
      count: "109",
      title: "Outlets",
    },
    {
      count: "35",
      title: "Country",
    },
  ];

  return (
    <section className="w-full bg-red-500 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl text-white text-center">
          Statistics
        </h1>
        <p className="text-center text-[#f5dfdf] text-sm py-5 w-full sm:w-[70%] md:w-[60%] lg:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center py-6">
          {StatisticsData.map((curElem, index) => {
            return (
              <div
                key={index}
                className="bg-red-500 border-4 w-52 h-52 flex items-center justify-center flex-col rounded-full mt-5"
              >
                <h1 className="text-5xl text-white font-bold">
                  {curElem.count}
                </h1>
                <p className="text-4xl text-white font-bold">{curElem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

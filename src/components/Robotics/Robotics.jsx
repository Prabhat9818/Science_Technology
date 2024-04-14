import React from "react";

const Robotics = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src="https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 overflow-hidden">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Robotics
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos molestiae reprehenderit
                expedita corporis, non doloremque. Consequatur consectetur
                quisquam qui sunt.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Robotics;

import React from "react";

const RoboticScience = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center overflow-hidden">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
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
            <div data-aos="zoom-in">
              <img
                src="https://images.pexels.com/photos/8438991/pexels-photo-8438991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoboticScience;

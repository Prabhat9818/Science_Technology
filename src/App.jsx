import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/Science and Technology.mp4";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsLetter from "./components/NewsLetter/NewsLetter.jsx";
import Robotics from "./components/Robotics/Robotics.jsx";
import RoboticScience from "./components/Satelite/RoboticScience .jsx";


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Robotics />
      <RoboticScience />
     
      <NewsLetter/>
      {/* <Footer /> */}
      <Footer5 />
    </div>
  );
};

export default App;

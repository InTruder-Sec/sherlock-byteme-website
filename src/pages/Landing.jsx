import Anantya from "./../assets/images/anantya.png";
import React from "react";
import "./../App.css";
import sherlock from "./../assets/images/sherlock.png";
import byteme from "./../assets/images/byteme-logo.png";
import { useNavigate } from "react-router-dom";
import sponsor1 from "./../assets/images/sponsor1.png";
import sponsor2 from "./../assets/images/sponsor2.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <div className="logo w-full  flex justify-center items-center flex-col font-medium  text-xl">
        <img src={Anantya} alt="Anantya" className="w-10/12 sm:w-4/12" />
        <span className="text-center text-3xl -mt-10 sm:-mt-12 stylish font-bold">
          Embrace the Legacy
        </span>
      </div>
      <div className="flex justify-center items-center mt-16 sm:mt-10">
        <div>
          <img
            src={sherlock}
            onClick={() => {
              navigate("/sherlock");
            }}
            alt="Sherlock"
            className="w-full sm:w-8/12 cursor-pointer sm:mx-12"
          />
        </div>
        <div className="w-[6px] h-72 rotate-12">
          <div className="h-3/6 w-full bg-gradient-to-b from-slate-950 to-green-400"></div>
          <div className="h-3/6 w-full bg-gradient-to-b to-slate-950 from-green-400"></div>
        </div>
        <div>
          <img
            src={byteme}
            onClick={() => {
              navigate("/byteme");
            }}
            alt="Byteme"
            className="w-full sm:w-7/12 sm:mx-24 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-center text-5xl font-bold">Our Sponsors</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap mt-10 justify-center items-center">
            <img
              src={sponsor1}
              alt="Wet n Joy"
              className="w-7/12 sm:w-2/12 -mt-8 sm:mx-12"
            />
            <img
              src={sponsor2}
              alt="Raftar / Piston Wolves"
              className="w-7/12 sm:w-2/12 -mb-6 sm:mx-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

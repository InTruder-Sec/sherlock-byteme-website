import React from "react";
import Timeline from "./Timeline";

function HeadLine({ details, handleClick }) {
  return (
    <div className="flex mt-12">
      <Timeline color="from-green-400" />
      <div className="flex flex-col sm:flex-row">
        <div className="w-11/12 sm:w-7/12">
          <div className="text-sm text-green-400 ">Event</div>
          <div className="text-6xl pb-12 font-medium">{details?.title}</div>
          <div className="image">
            <img
              src={details.logo}
              alt="Byte Me"
              className="sm:hidden -mt-[40px]"
            />
          </div>
          <span className="w-8/12">{details?.description}</span>
          <button
            className="bg-green-600 text-white px-4 py-2 my-12 block font-medium rounded-sm hover:bg-green-900 duration-500"
            onClick={handleClick}
          >
            Register Now
          </button>
        </div>
        <div className="hidden sm:block image">
          <img src={details.logo} alt="Byte Me" className="w-4/6" />
        </div>
      </div>
    </div>
  );
}

export default HeadLine;

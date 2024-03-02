import React from "react";
import Timeline from "./Timeline";

function Prizes(props) {
  return (
    <div className="flex mt-12 w-full">
      <Timeline color="from-green-400" />
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-11/12 sm:w-7/12">
          <div className="text-sm text-green-400 ">Worried about rewards?</div>
          <div className="text-6xl pb-12">Prizes</div>
          <div className="image">
            {/* <img
              src={ByteLogo}
              alt="Byte Me"
              className="sm:hidden -mt-[40px]"
            /> */}
          </div>
          <span className="block pb-12">
            {props.details.prizes.map((prize, index) => (
              <p key={index} className="">
                {prize}
              </p>
            ))}
          </span>
        </div>
        <div className="hidden sm:block image">
          {/* <img src={ByteLogo} alt="Byte Me" className="w-4/6" /> */}
        </div>
      </div>
    </div>
  );
}

export default Prizes;

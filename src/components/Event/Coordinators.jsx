import React from "react";
import Timeline from "./Timeline";

function Coordinators(props) {
  return (
    <div className="flex mt-12 w-full">
      <Timeline color="from-white" />
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-11/12 sm:w-7/12">
          <div className="text-sm text-green-400 ">Having issues?</div>
          <div className="text-6xl pb-12 font-medium">Contact Us</div>
          <div className="font-bold text-2xl pb-4">Event Coordinators</div>
          <span className="block pb-12">
            {props.coordinators.map((coordinator, index) => (
              <div className="mt-4" key={index}>
                <p>{coordinator.name}</p>
                <p>{coordinator.phone}</p>
                <p>
                  <a href={`mailto:{coordinator.email}`}>{coordinator.email}</a>
                </p>
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Coordinators;

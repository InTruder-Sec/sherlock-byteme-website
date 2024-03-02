import React from "react";
import Timeline from "./Timeline";

function Rulebook({ rules }) {
  return (
    <div className="flex mt-16">
      <Timeline color={"from-white"} />
      <div className="flex flex-col sm:flex-row">
        <div className="w-11/12 sm:w-8/12">
          <div className="text-sm text-green-400 ">Be Ethical</div>
          <div className="text-6xl pb-12">Rule Book</div>
          <div className="image"></div>
          <span className="">
            <ul className="list-disc">
              {rules.rule.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </span>
          <button
            className="bg-slate-100 text-black px-4 py-2 my-12 block rounded-sm hover:bg-slate-300 duration-500"
            onClick={() => window.open(rules.link, "_blank")}
          >
            Download Rulebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rulebook;

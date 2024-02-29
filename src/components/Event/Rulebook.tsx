import React from "react";
import Timeline from "./Timeline";

function Rulebook() {
  return (
    <div className="flex mt-16">
      <Timeline color={"from-white"} />
      <div className="flex flex-col sm:flex-row">
        <div className="w-11/12 sm:w-8/12">
          {/* <div className="text-sm text-green-400 ">Know More</div> */}
          <div className="text-6xl pb-12">Rule Book</div>
          <div className="image"></div>
          <span className="">
            <ul className="list-disc">
              <li>
                Each player must stick with the team they're registered with
                throughout the event.
              </li>
              <li>
                Players from eliminated teams can't join any other qualified
                team for the final round.
              </li>
              <li>
                Playing for more than one team will get the whole team
                disqualified.
              </li>
              <li>Teams need to stick to the time limits for each round.</li>
              <li>
                The organizing committee's decisions are final, and any
                misbehavior toward them will result in the entire team being
                disqualified.
              </li>
            </ul>
          </span>
          <button className="bg-slate-100 text-black px-4 py-2 my-12 block rounded-sm hover:bg-slate-300 duration-500">
            Download Rulebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rulebook;

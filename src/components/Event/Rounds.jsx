import React from "react";
import Timeline from "./Timeline";

function Rounds(props) {
  return (
    <div className="flex mt-12">
      <Timeline color="from-white" />
      <div className="flex flex-col w-full sm:flex-row">
        <div className="w-11/12 sm:w-7/12">
          <div className="text-sm text-green-400 ">Know More</div>
          <div className="text-6xl pb-12">Event Rounds</div>
          <span className="w-11/12 block pb-10">
            {props.details?.round?.map((round, index) => (
              <div key={index}>
                <div className="text-2xl mt-6 font-semibold">{round.title}</div>
                <ul className="list-disc">
                  {round?.details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* <div className="text-2xl font-semibold">Round 1</div>
            <ul className="list-disc">
              <li>OSInt stands for Open Source Intelligence.</li>
              <li>
                This round will be an OSInt Round featuring questions related to
                core computer science subjects.
              </li>
              <li>
                Each team must solve the challenges within the specified format
                and time limit on the provided platform (CTFd).
              </li>
              <li>
                The top 20 teams with the highest scores will qualify for round
                2.
              </li>
              <li>
                Teams are allowed to use Google or any other platform to find
                the answers to the challenges.
              </li>
            </ul>
            <div className="text-2xl font-semibold mt-10">Round 2</div>
            <ul className="list-disc">
              <li>
                In the final challenge-solving round, the top 20 teams from the
                first round will tackle the provided challenge.{" "}
              </li>
              <li>
                The challenges will include additional categories along with
                those from the first round.
              </li>
              <li>
                Teams are allowed to use Google or any other platform to find
                the answers to the challenges.
              </li>
            </ul> */}
          </span>
        </div>
        <div className="hidden sm:block image">
          {/* <img src={ByteLogo} alt="Byte Me" className="w-4/6" /> */}
        </div>
      </div>
    </div>
  );
}

export default Rounds;

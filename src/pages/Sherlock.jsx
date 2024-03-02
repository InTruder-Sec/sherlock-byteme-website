import React from "react";
import HeadLine from "../components/Event/HeadLine";
import SherlockLogo from "./../assets/images/sherlock.png";
import Rulebook from "../components/Event/Rulebook";
import Prizes from "../components/Event/Prizes";
import Rounds from "../components/Event/Rounds";
import Contact from "../components/Event/Contact";
import { useRef } from "react";

const sherlock = {
  title: "Sherlock 2.0",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nemo quod consequuntur asperiores perspiciatis pariatur culpa amet, veritatis harum, dolore ipsum ab aperiam quos ut aliquam? Quae, molestias! Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex incidunt ipsum itaque ad! Quo ullam, nesciunt quas voluptatem iure rem omnis assumenda, vel, facilis corrupti debitis. Veritatis, at eos?",
  logo: SherlockLogo,
  prizes: [
    "1st: 3200",
    "2nd: 2000",
    "3rd: 1000",
    "+ Goodies for all participants",
  ],
  rules: {
    rule: [
      "Each player must stick with the team they're registered with throughout the event.",
      "Players from eliminated teams can't join any other qualified team for the final round.",
      "Teams need to stick to the time limits for each round.",
      "The organizing committee's decisions are final, and any misbehavior toward them will result in the entire team being disqualified.",
      "Each team mush have minimum of 2 and maximum of 3 students.",
    ],
    link: "",
  },
  round: [
    {
      title: "Round 1",
      details: [
        "OSInt stands for Open Source Intelligence.",
        "This round will be an OSInt Round featuring questions related to core computer science subjects.",
        "Each team must solve the challenges within the specified format and time limit on the provided platform (CTFd).",
        "The top 20 teams with the highest scores will qualify for round 2.",
        "Teams are allowed to use Google or any other platform to find the answers to the challenges.",
      ],
    },
    {
      title: "Round 2",
      details: [
        "This round will be a challenge solving round.",
        "The top 20 teams from the first round will tackle the provided challenge.",
        "The challenges will include additional categories along with those from the first round.",
        "Teams are allowed to use Google or any other platform to find the answers to the challenges.",
      ],
    },
  ],
};

function Sherlock() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-20 my-32 relative">
      <HeadLine details={sherlock} handleClick={handleClick} />
      <Rulebook rules={sherlock.rules} />
      <Prizes details={sherlock} />
      <Rounds details={sherlock} />
      <Contact reffer={ref} />
    </div>
  );
}

export default Sherlock;

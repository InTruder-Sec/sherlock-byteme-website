import React, { useEffect } from "react";
import HeadLine from "../components/Event/HeadLine";
import bytemelogo from "./../assets/images/byteme-logo.png";
import Rulebook from "../components/Event/Rulebook";
import Prizes from "../components/Event/Prizes";
import Rounds from "../components/Event/Rounds";
import { useRef } from "react";
import BytemeRules from "./../assets/Rulebooks/Byteme.pdf";
import Coordinators from "../components/Event/Coordinators";
import Registration from "../components/Event/RegistrationByteme";
const byteme = {
  title: "Byte Me",
  description:
    "Byte Me is a fusion of challenges, testing individuals skills in a variety of domains, from exploring your general technical skills to cracking ciphers. Each challenge will be based on the key events on the story line movie interstellar, letting you explore the universe of computer science.",
  logo: bytemelogo,
  prizes: [
    "1st Prize : Rs 3,200/-",
    "2nd Prize: Rs 2,000/-",
    "3rd Prize : Rs 1,000/-",
    "+ Goodies for participants",
  ],
  rules: {
    rule: [
      "Each player must stick with the team they're registered with throughout the event.",
      "Players from eliminated teams can't join any other qualified team for the final round.",
      "No damage should be done to the platform or the challenges.",
      "Teams need to stick to the time limits for each round.",
      "The organizing committee's decisions are final, and any misbehavior toward them will result in the entire team being disqualified.",
      "Please download the rulebook for more details.",
    ],
    link: BytemeRules,
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
  Coordinators: [
    {
      name: "Omkar Pote",
      phone: "+91 9324040823",
      email: "omkar.pote21@pccoepune.org",
    },
    {
      name: "Deep Dhakate",
      phone: "+91 9022244068",
      email: "deep.dhakate21@pccoepune.org",
    },
  ],
};

function Byteme() {
  const ref = useRef(null);

  const handleClickScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="z-20 my-32 relative">
      <HeadLine details={byteme} handleClick={handleClickScroll} />
      <Rulebook rules={byteme.rules} />
      <Prizes details={byteme} />
      <Rounds details={byteme} />
      <Registration reffer={ref} />
      <Coordinators coordinators={byteme.Coordinators} />
    </div>
  );
}

export default Byteme;

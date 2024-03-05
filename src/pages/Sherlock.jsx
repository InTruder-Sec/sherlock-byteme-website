import React, { useEffect } from "react";
import HeadLine from "../components/Event/HeadLine";
import SherlockLogo from "./../assets/images/sherlock.png";
import Rulebook from "../components/Event/Rulebook";
import Prizes from "../components/Event/Prizes";
import Rounds from "../components/Event/Rounds";
import { useRef } from "react";
import Coordinators from "../components/Event/Coordinators";
import Registration from "../components/Event/RegistrationSherlock";
import SherlockRulebook from "./../assets/Rulebooks/Sherlock.pdf";

const sherlock = {
  title: "Sherlock 2.0",
  description:
    "A group of hackers have launched a brazen attack on an organization. As members of Team OWASP, we have taken up the challenge to delve into the depths of this cybercrime and track down the perpetrator. Each clue and hint uncovered in this intricate web of deceit brings us one step closer to identifying and apprehending the hacker behind this malicious act. Our mission rests on keen observation, perceptive analysis, and collaborative effort as we navigate through the digital labyrinth to ensure justice prevails.",
  logo: SherlockLogo,
  prizes: [
    "1st Prize: Rs.5000/-",
    "2nd Prize: Rs.4000/-",
    "3rd Prize: Rs.3000/-",
    "+ Goodies for participants",
  ],
  rules: {
    rule: [
      "Event will include 3 rounds.",
      "Each team will consist of not more or less than 2 players.",
      "Participants must bring a pen and paper for rough work for round 2.",
      "No Change of teammates will be allowed.",
      "Failure of teammates to reach on time may lead to disqualification.",
      "From all the participating teams only 32 teams will progress to round 2.",
      "Top 8 teams will progress to the final round.",
      "Any malpractice or violation of the instructions given would lead to immediate Disqualification.",
      "The event organizers reserve the right to disqualify any participant or team that violates the event rules or fails to follow instructions.",
      "The final Decision of results made by organizers will be final.",
    ],
    link: SherlockRulebook,
  },
  round: [
    {
      title: "Round 1 | You can't catch me",
      details: [
        "Round 1 includes a careful understanding of a video which is forwarded by the hacker.",
        "Initially 5 mins will be given to watch the video.",
        "Video will be shown on a projector after which participants have to answer a quiz on the Slido platform which would be based on the points described by the hacker in the video.",
        "30 seconds will be provided to answer each question.",
        "The teams will be evaluated by the speed and accuracy they showcase in this round.",
      ],
    },
    {
      title: "Round 2 | Death or Glory",
      details: [
        "32 teams will be merged to 16 teams each team consisting of 4 members.",
        "Now these teams will be divided into two Groups red and blue.",
        "Each team will consist of 8 teams.",
        "They will create a problem statement which would lead them to a place on our campus.",
        "These problem statements will be checked by our Sherlock Volunteers for confirming correctness and authenticity of the Statement.",
        "This Confirmation will be called as a meeting.",
        "Members can take only 3 meetings in total with the team.",
        "Any incorrect description would lead to negative marking as per the marking scheme as follows.",
        "The teams will now be broken down to their original form. i.e. The original form of their team of 2 members each.",
      ],
    },
    {
      title: "Round 3 | Maze Runner",
      details: [
        "As the qualified teams embark on their mission, they must navigate the campus to uncover the hacker hidden within the walls of the college, where every shadow conceals a potential digital adversary.",
        "The teams will be provided with the initial hint which would lead them to an initial QR.",
        "After this they have to solve the riddles placed in the successive QR which would lead them to the ultimate location of the hacker.",
        "At the location there would be a group of 3 hackers out of which only one is the real hacker.",
        "The members' intelligence and presence of mind would lead them to a perfect win.",
      ],
    },
  ],
  Coordinators: [
    {
      name: "Mrunal Chopade",
      phone: "+91 8080059264",
      email: "mrunal.chopade22@pccoepune.org",
    },
    {
      name: "Visesh Chauhan",
      phone: "+91 7620767941",
      email: "visesh.chauhan22@pccoepune.org",
    },
  ],
};

function Sherlock() {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-20 my-32 relative">
      <HeadLine details={sherlock} handleClick={handleClick} />
      <Rulebook rules={sherlock.rules} />
      <Prizes details={sherlock} />
      <Rounds details={sherlock} />
      <Registration reffer={ref} />
      <Coordinators coordinators={sherlock.Coordinators} />
    </div>
  );
}

export default Sherlock;

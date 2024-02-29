import React from "react";
import HeadLine from "../components/Event/HeadLine";
import bytemelogo from "./../assets/images/byteme-logo.png";

const sherlock = {
  title: "Sherlock 2.0",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nemo quod consequuntur asperiores perspiciatis pariatur culpa amet, veritatis harum, dolore ipsum ab aperiam quos ut aliquam? Quae, molestias! Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex incidunt ipsum itaque ad! Quo ullam, nesciunt quas voluptatem iure rem omnis assumenda, vel, facilis corrupti debitis. Veritatis, at eos?",
  image: bytemelogo,
};

function Sherlock() {
  return (
    <div className="z-20 my-32 relative">
      <HeadLine details={sherlock} />
    </div>
  );
}

export default Sherlock;

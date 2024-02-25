import React from "react";

function Background() {
  return (
    <div
      className={`z-10 w-screen h-screen fixed bg-[url('/Grains.svg')] overflow-hidden opacity-60 animate-pulse`}
    >
      <div
        className={`-z-10 absolute  md:w-screen h-screen bg-[url('/planet.png')] animate-pulse md-right-0 md:left-auto -left-[500px] sm:-left-96 top-20 w-[1800px] bg-cover overflow-visible`}
      ></div>
    </div>
  );
}

export default Background;

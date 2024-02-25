import React from "react";

function Background() {
  return (
    <div
      className={`z-10 w-screen h-screen fixed bg-[url('./Grains.png')] overflow-hidden`}
    >
      <div
        className={`-z-10 absolute opacity-60 md:w-screen h-screen bg-[url('./planet.png')] animate-pulse md-right-0 md:left-auto -left-[500px] sm:-left-96 top-20 w-[1800px] bg-cover overflow-visible`}
      ></div>
    </div>
  );
}

export default Background;

import { Code } from "lucide-react";
import React from "react";

function Timeline(props) {
  return (
    <>
      <div
        className={`bg-gradient-to-t overflow-visible ${props.color} mx-8 sm:mx-20 h-auto relative text-white block min-w-[4px]`}
      >
        <div
          className={`absolute -bottom-[48px] animate-pulse -left-[18px] rounded-full h-10 w-10 bg-gradient-radial from-${props.color} opacity-40`}
        />
        <Code className="absolute -bottom-10 -left-2.5" />
      </div>
    </>
  );
}

export default Timeline;

import { Code, Search } from "lucide-react";
import React from "react";

function Home() {
  return (
    <div className="pt-32 text-center text-4xl px-4 z-50">
      This Anantya OWASP PCCOE <br />
      <div className="text-2xl">Presents</div>
      <div>
        <span className="text-2xl py-4  mt-12 flex w-fit justify-center items-center mx-auto">
          Sherlock
          <Search size={24} className="ml-2" />
        </span>
        <span className="text-2xl flex py-4 w-fit justify-center items-center mx-auto">
          ByteMe
          <Code size={24} className="ml-2" />
        </span>
      </div>
      <div className="mt-24">Comming Soon!</div>
    </div>
  );
}

export default Home;

import OwaspLogo from "../assets/images/logo-main.png";
import React from "react";
import "./../App.css";
import { Code, Search } from "lucide-react";

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
      {/* <section class="container">
        <div class="hero">
          <div class="hero__heading">
            <img class="hero__logo-main" src={OwaspLogo} alt="" />
          </div>
          <div class="hero__events">
            <div class="hero__left">
              <img class="hero__logo" src={OwaspLogo} alt="" />
            </div>
            <div class="hero__right">
              <img class="hero__logo" src={OwaspLogo} alt="" />
            </div>
          </div>
        </div>
      </section> */}
      {/* This Anantya OWASP PCCOE <br />
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
      <div className="mt-24">Comming Soon!</div> */}
    </div>
  );
}

export default Home;

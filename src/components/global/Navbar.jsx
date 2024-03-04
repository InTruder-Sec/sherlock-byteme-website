import React, { useState } from "react";
import logo from "./../../assets/images/logo-main.png";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="bg-white z-50">
      <div className="fixed top-0 z-40 w-full bg-black ease-in text-white p-4">
        <div className="w-full h-full hidden sm:flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="OWASP PCCOE" className="w-[135px] h-[50px]" />
          </div>
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="font-medium mx-4 text-lg cursor-pointer">
                About
              </div>
            </Link>
            /
            <Link to="/sherlock">
              <div className="font-medium mx-4 text-lg cursor-pointer">
                Sherlock
              </div>
            </Link>
            /
            <Link to="/byteme">
              <div className="font-medium mx-4 text-lg cursor-pointer">
                Byteme
              </div>
            </Link>
            /
            <Link to="/feedback">
              <div className="font-medium mx-4 text-lg cursor-pointer">
                Feedback
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Hamburger */}
      <div className="sm:hidden z-40 fixed top-0 w-full bg-black text-white p-4">
        <div className="w-full h-full flex justify-between items-center bg-black">
          <div className="logo">
            <img src={logo} alt="OWASP PCCOE" className="w-[135px] h-[50px]" />
          </div>
          <div
            className="trigger cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          >
            <svg
              width="45px"
              height="45px"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              stroke-width="0.25"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div
            className={`${
              isOpen
                ? "absolute w-screen duration-500 h-[630px] mt-32 z-20 ml-0  border-b-2 bg-black border-b-green-400  rounded-bl-full text-right px-10 pt-[210px] py-16"
                : "absolute w-screen duration-500 h-[630px] -mt-[720px] ml-[100px] z-20  border-b-2 bg-black border-b-green-400  rounded-bl-full text-right px-10 pt-[210px] py-16"
            } `}
          >
            <div
              className="font-medium mx-4 text-lg cursor-pointer my-10 absolute left-3/4 mt-9"
              onClick={() => setisOpen(!isOpen)}
            >
              <X />
            </div>
            <Link to="/">
              <div
                className="font-medium mx-4 text-lg cursor-pointer my-10 mt-24"
                onClick={() => setisOpen(!isOpen)}
              >
                About
              </div>
            </Link>
            <Link to="/sherlock">
              <div
                className="font-medium mx-4 text-lg cursor-pointer my-10"
                onClick={() => setisOpen(!isOpen)}
              >
                Sherlock
              </div>
            </Link>
            <Link to="/byteme">
              <div
                className="font-medium mx-4 text-lg cursor-pointer my-10"
                onClick={() => setisOpen(!isOpen)}
              >
                Byteme
              </div>
            </Link>
            <Link to="/feedback">
              <div
                className="font-medium mx-4 text-lg cursor-pointer my-10"
                onClick={() => setisOpen(!isOpen)}
              >
                Feedback
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

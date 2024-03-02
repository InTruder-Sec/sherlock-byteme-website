import React, { useState } from "react";

function Registration() {
  const [AddMember, setAddMember] = useState(false);
  return (
    <div className="w-8/12 pt-12">
      <div className="text-sm text-green-400 ">See you soon</div>
      <div className="text-6xl pb-6">Register Now</div>
      <form>
        <div className="my-4">
          <label className="block mt-4 text-sm">Team Name:</label>
          <input
            type="text"
            className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
            placeholder="Something cool"
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="my-4">
          <label className="block mt-4 text-sm">Team Leader Name:</label>
          <input
            type="text"
            className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
            placeholder="Enter your name"
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="my-4">
          <label className="block mt-4 text-sm">Team Leader Email:</label>
          <input
            type="text"
            className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="my-4">
          <label className="block mt-4 text-sm">Team Member Name:</label>
          <input
            type="text"
            className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
            placeholder="Enter your name"
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="my-4">
          <label className="block mt-4 text-sm">Team Member Email:</label>
          <input
            type="text"
            className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="my-4 ">
          <div
            placeholder="Add Member(Optional)"
            className={`w-full border  text-center py-2 border-green-400 hover:bg-green-400 hover:text-black duration-300 text-white p-2 rounded-lg my-4 ${
              AddMember ? "hidden" : "block"
            } `}
            onClick={() => setAddMember(!AddMember)}
          >
            Add Member
          </div>
        </div>
        <div className={`optional params ${AddMember ? "block" : "hidden"}`}>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team 3rd Member Name:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your name"
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team 3rd Member Email:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <button className="w-full border border-green-400 hover:bg-green-400 hover:text-black duration-300 text-white p-2 rounded-lg my-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;

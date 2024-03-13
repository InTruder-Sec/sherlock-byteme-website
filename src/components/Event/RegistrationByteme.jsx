import React, { useState } from "react";
import { ENDPOINT } from "./../../main";
import Timeline from "./Timeline";
import { toast } from "react-toastify";
import { ArrowDownToLine, Copy, Loader2 } from "lucide-react";
import PaymentQR from "./../../assets/images/payment.jpeg";

function Registration({ reffer }) {
  const [AddMember, setAddMember] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [formData, setformData] = useState({
    teamname: "",
    teamleader: "",
    teamleaderEmail: "",
    teamleaderPhone: "",
    member2: "",
    member2Email: "",
    member3: "",
    member3Email: "",
  });
  const [transactionId, settransactionId] = useState("");

  const submitForm = (e) => {
    if (isLoading) return;

    e.preventDefault();
    setisLoading(true);

    if (
      formData.teamname === "" ||
      formData.teamleader === "" ||
      formData.teamleaderEmail === "" ||
      formData.teamleaderPhone === "" ||
      formData.member2 === "" ||
      formData.member2Email === ""
    ) {
      toast.error("Please fill all the fields", {});
      setisLoading(false);
      return;
    }

    // Check if any mail is not from PCCOE if yes then check for transaction ID
    if (
      !formData.teamleaderEmail.includes("pccoepune") ||
      !formData.member2Email.includes("pccoepune")
    ) {
      if (transactionId === "") {
        toast.error(
          "One or more emails are not from pccoe! Please pay the fees and add transaction ID.",
          {}
        );
        setisLoading(false);
        return;
      }
    }
    const data = {
      registrationDetails: {
        ...formData,
      },
      eventName: "Byte Me",
      transactionId: transactionId,
    };
    // Request to ENDPOINT/API/REGISTER
    fetch(`${ENDPOINT}api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key === 200) {
          toast.success(data.message, {});
        } else {
          toast.error(data.message, {});
        }
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  };

  return (
    <div className="flex" ref={reffer}>
      <Timeline color="from-green-400" />
      <div className="w-8/12 pt-12">
        <div className="text-sm text-green-400 ">See you soon</div>
        <div className="text-6xl pb-6 font-medium">Register Now</div>
        <form>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team Name:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Something cool"
              onChange={(e) =>
                setformData({ ...formData, teamname: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team Leader Name:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your name"
              onChange={(e) =>
                setformData({ ...formData, teamleader: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team Leader Email:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setformData({ ...formData, teamleaderEmail: e.target.value })
              }
            />
          </div>

          <div className="my-4">
            <label className="block mt-4 text-sm">Team Leader Phone:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your phone number"
              onChange={(e) =>
                setformData({ ...formData, teamleaderPhone: e.target.value })
              }
            />
          </div>

          <div className="my-4">
            <label className="block mt-4 text-sm">Team Member Name:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your name"
              onChange={(e) =>
                setformData({ ...formData, member2: e.target.value })
              }
            />
          </div>
          <div className="my-4">
            <label className="block mt-4 text-sm">Team Member Email:</label>
            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setformData({ ...formData, member2Email: e.target.value })
              }
            />
          </div>
          <div className="my-4 ">
            <div
              placeholder="Add Member(Optional)"
              className={`w-full border cursor-pointer text-center py-2 border-green-400 hover:bg-green-400 hover:text-black duration-300 text-white p-2 rounded-lg my-4 ${
                AddMember ? "hidden" : "block"
              } `}
              onClick={() => setAddMember(!AddMember)}
            >
              Add Member
            </div>
          </div>
          <div className={`optional params ${AddMember ? "block" : "hidden"}`}>
            <div className="my-4">
              <label className="block mt-4 text-sm">
                Team 3rd Member Name:
              </label>
              <input
                type="text"
                className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
                placeholder="Enter your name"
                onChange={(e) =>
                  setformData({ ...formData, member3: e.target.value })
                }
              />
            </div>
            <div className="my-4">
              <label className="block mt-4 text-sm">
                Team 3rd Member Email:
              </label>
              <input
                type="text"
                className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setformData({ ...formData, member3Email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="my-4">
            {/* Qr code for payment */}
            <div className="text-2xl text-green-400">Payment</div>
            <div className="text-sm my-2">
              Please pay RS 25/- per person if you are not a student of PCCOE.
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-sm  w-fit p-3 flex">
                <img
                  src={PaymentQR}
                  className="w-40"
                  alt="Failed to load! please try again!"
                />
                {/* Download and upi id copy buttons */}
                <div className="flex flex-col ">
                  <a href={PaymentQR} download="payment.jpeg">
                    <div className="text-sm border rounded-md p-1 ml-3 hover:text-black hover:bg-white">
                      <ArrowDownToLine size={16} />
                    </div>
                  </a>

                  <div
                    className="text-sm border rounded-md p-1 ml-3 hover:text-black hover:bg-white mt-3"
                    onClick={() => {
                      try {
                        navigator.clipboard.writeText(
                          "mrunalchopade2003@oksbi"
                        );
                        toast.success("UPI ID copied successfully!", {});
                      } catch (err) {
                        toast.error("Failed to copy UPI ID!", {});
                        console.error(err);
                      }
                    }}
                  >
                    <Copy size={16} />
                  </div>
                </div>
              </div>
              <div className="font-bold">mrunalchopade2003@oksbi</div>
            </div>
            <label className="block mt-4 text-sm">Transaction ID:</label>

            <input
              type="text"
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your transaction ID(if applicable)"
              onChange={(e) => settransactionId(e.target.value)}
            />
          </div>
          {isLoading ? (
            <div className="w-full bg-green-400 text-white text-center p-2 rounded-lg my-4 flex justify-center items-center ">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            <button
              className="w-full border border-green-400 hover:bg-green-400 hover:text-black duration-300 text-white p-2 rounded-lg my-4"
              onClick={submitForm}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Registration;

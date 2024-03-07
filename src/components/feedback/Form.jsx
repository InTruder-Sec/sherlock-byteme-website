import React, { useState } from "react";
import { ENDPOINT } from "../../main";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

function Form() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [isLoading, setisLoading] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setisLoading(true);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.feedback === ""
    ) {
      toast.error("Please fill all the fields", {});

      setisLoading(false);
      return;
    }
    console.log(formData);
    fetch(`${ENDPOINT}api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(
            "Feedback submitted successfully! Our team will get back to you shortly.",
            {}
          );
        } else {
          toast.error("Error in submitting feedback", {});
        }
        setisLoading(false);
      });
  };

  return (
    <div className="w-screen pt-32">
      <div className="w-11/12 md:w-6/12 lg:w-4/12 mx-auto border-0 border-green-400 rounded-lg p-8 shadow-inner  shadow-green-500 ">
        <form className="w-11/12  mx-auto">
          <div className="text-4xl my-7 font-medium">Feedback</div>
          <div className="my-4">
            <label className="block mt-4 text-sm">Name:</label>
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
            <label className="block mt-4 text-sm">Email:</label>
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
            <label className="block mt-4 text-sm">Query/Feedback:</label>
            <textarea
              className="w-full p-2  bg-neutral-950 px-4 my-1 rounded-lg text-sm border-2 focus:border-green-400 focus:outline-none"
              placeholder="Enter your query/feedback"
              onChange={(e) =>
                setformData({ ...formData, feedback: e.target.value })
              }
            />
          </div>
          {isLoading ? (
            <button className="w-full border border-green-400 hover:bg-green-400 hover:text-black duration-300 text-white p-2 rounded-lg my-4 flex justify-center items-center">
              <Loader2 className="animate-spin" />
            </button>
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

export default Form;

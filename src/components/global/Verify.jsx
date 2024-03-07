import { CheckCircle, Loader2, ShieldX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ENDPOINT } from "../../main";

function Verify() {
  const [isLoading, setisLoading] = useState(true);
  const [result, setResult] = useState({
    key: 301,
    message: "Verifying please wait...",
  });

  // Get the token from the URL verify?token=token
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  useEffect(() => {
    fetch(`${ENDPOINT}api/verify?token=${token}`).then((res) => {
      res.json().then((data) => {
        setResult(data);
        setisLoading(false);
      });
    });
  }, [token]);

  return (
    <div className="w-screen py-52 flex justify-center items-center">
      <div className="border border-green-400 rounded-lg p-8 shadow-inner  shadow-green-500 w-8/12">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <Loader2 size="50" className="animate-spin" />
            <div className=" text-center">{result.message}</div>
          </div>
        ) : (
          <div className=" text-center">
            {result.key === 200 ? (
              <div className="flex flex-col items-center justify-center">
                <CheckCircle size="50" />
                <div className="pt-4">{result.message}</div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <ShieldX size="50" />
                <div className="pt-4">{result.message}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Verify;

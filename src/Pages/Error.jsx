import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen text-white flex flex-col items-center justify-center gap-7">
      <p className="text-5xl">404 NOT FOUND</p>
      <button
        className="border border-white rounded-md w-[93px] py-1 hover:text-black hover:bg-white transition mt-10"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
      <button
        className="border border-white rounded-md w-[93px] py-1 hover:text-black hover:bg-white transition"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;

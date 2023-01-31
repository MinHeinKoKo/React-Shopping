import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="bg-secondary p-20 rounded shadow-lg mt-10 animate__animated animate__backInDown">
        <h1 className="text-4xl font-semibold tracking-wider my-5 text-primary mb-8">
          Thanks for Purchasing
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-primary bg-info shadow-lg px-6 py-2 uppercase rounded-lg"
        >
          Go Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;

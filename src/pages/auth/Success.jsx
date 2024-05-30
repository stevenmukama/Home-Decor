import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Logged in</h2>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
          onClick={() => navigate("/")}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;

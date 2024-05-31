import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2000); // Simulate a signup delay
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 pt-12"
      style={{
        backgroundImage: "url('/assets/bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet title="Signup" />
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg bg-opacity-50 w-full max-w-4xl">
        <div className="p-8 md:p-24 bg-black bg-opacity-80 text-white rounded-t-lg md:rounded-r-lg md:rounded-t-none flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
          <div className="border-b border-white mt-3 relative w-full">
            <span className="absolute -top-0.5 bg-white w-1 h-1 rounded-full block"></span>
          </div>
          <span className="mt-4 px-12 py-2 hover:bg-gray-800 border border-gray-200 text-white text-sm rounded-3xl">
            <Link to="/login">LOG IN</Link>
          </span>
        </div>
        <div className="p-8 md:p-24 flex flex-col justify-center items-center rounded-b-lg md:rounded-l-lg md:rounded-b-none">
          <h2 className="text-2xl text-gray-600 font-bold mb-4">
            Create Account
          </h2>
          <div className="flex justify-center gap-4 py-2">
            <img
              src="/assets/Google.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
            <img
              src="/assets/IG.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
            <img
              src="/assets/Behance.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
          </div>
          <p className="text-gray-400 my-4">Or use other accounts</p>
          <div className="relative mb-2 w-full">
            <img src="/assets/user.svg" className="absolute top-2 left-4" />
            <input
              type="text"
              placeholder="Name"
              className="py-2 px-4 pl-12 w-full border rounded"
            />
          </div>
          <div className="relative mb-2 w-full">
            <img src="/assets/mail.svg" className="absolute top-2 left-4" />
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-4 pl-12 w-full border rounded"
            />
          </div>
          <div className="relative mb-2 w-full">
            <img src="/assets/lock.svg" className="absolute top-2 left-4" />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-4 pl-12 w-full border rounded"
            />
          </div>
          <button
            className="px-16 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm rounded-3xl mt-8"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Loading..." : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

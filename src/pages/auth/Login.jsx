import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/success");
    }, 2000); // Simulate a login delay
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/src/assets/bg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet title="Login" />
      <div className="flex bg-white rounded-lg shadow-lg bg-opacity-50">
        <div className="p-24 flex flex-col justify-center items-center rounded-l-lg">
          <h2 className="text-2xl text-gray-600 font-bold mb-4">
            Log in to your account
          </h2>
          <div className="flex justify-center gap-4 py-2">
            <img
              src="/src/assets/Google.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
            <img
              src="/src/assets/IG.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
            <img
              src="/src/assets/Behance.svg"
              className="bg-gray-300 p-2 rounded-full"
            />
          </div>
          <p className="text-gray-400 my-4">Or use other accounts</p>
          <div className="relative mb-2">
            <img src="/src/assets/mail.svg" className="absolute top-2 left-4" />
            <input
              type="email"
              placeholder="Email"
              className="py-1 px-2 pl-10 w-full border rounded"
            />
          </div>
          <div className="relative mb-2">
            <img src="/src/assets/lock.svg" className="absolute top-2 left-4" />
            <input
              type="password"
              placeholder="Password"
              className="py-1 px-2 pl-10 w-full border rounded"
            />
          </div>
          <a href="#" className="text-gray-600 my-4">
            Forgot password?
          </a>
          <button
            className="px-16 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm rounded-3xl"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Loading..." : "LOG IN"}
          </button>
        </div>
        <div className="p-24 bg-black bg-opacity-80 text-white rounded-r-lg flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">New here?</h2>
          <div className="border-b border-white mt-3 relative w-full">
            <span className="absolute  -top-0.5 bg-white w-1 h-1 rounded-full block"></span>
          </div>
          <span className="mt-4 px-12 py-2 hover:bg-gray-800 border border-gray-200 text-white text-sm rounded-3xl">
            <Link to="/signup">SIGN UP</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
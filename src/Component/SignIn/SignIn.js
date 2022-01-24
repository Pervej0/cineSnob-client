import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signInSubmit = () => {
    if (userInfo.email === "") {
      setUserError("Please enter your email!");
      return;
    }
    if (userInfo.password === "") {
      setUserError("Please enter your password!");
      return;
    }
    console.log(userInfo);
    setUserError("");
  };
  return (
    <section className="signin-background flex items-center">
      <div className="w-2/4 mx-auto p-6 text-white my-8 bg-gray-900">
        <div>
          <div className="mb-3">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Email:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="password"
              type="password"
              required
              placeholder="Enter password"
            />
          </div>
          <p className="text-red-300 text-xl my-4">{userError}</p>
          <button
            type="button"
            onClick={signInSubmit}
            className="inline-block py-2 px-5 transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white text-black font-semibold bg-white uppercase"
          >
            Sign in
          </button>
        </div>
        <div className="text-center">
          <div className="text-white text-center my-4 text-lg">
            ---------------- or ------------------
          </div>
          <div className="text-center">
            <button className="px-4 py-2 border flex items-center justify-center mx-auto my-6">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
              &nbsp; Sign In With Google
            </button>
          </div>
          <div>
            <h4>
              Are you new here?{" "}
              <Link to="/register" className="text-yellow-400 font-semibold">
                Create an account
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

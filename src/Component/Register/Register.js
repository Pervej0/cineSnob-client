import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";
import {
  faEnvelope,
  faLock,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Register = () => {
  const [details, setDetails] = useState({});
  const [errors, setErrors] = useState(null);
  const [passMatched, setPassMatched] = useState("");

  const HandleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newDeatils = { ...details, [name]: value };
    setDetails(newDeatils);
    setErrors(null);
  };

  const HandleChange = (e) => {
    setErrors({
      passLength: "Password length must be 6 to 16",
      containeLetter: "Password containe atleast one letter",
      containeDigit: "password must contain at least one digit",
      specialCharacter: "Password must contain an special character",
      success: "",
      fail: "Password isn't valid",
    });
    const name = e.target.name;
    const value = e.target.value;
    const newDeatils = { ...details, [name]: value };
    setDetails(newDeatils);
    // Password validation
    const regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (value.length > 6) {
      setErrors((prev) => {
        prev.passLength = "";
        return { ...prev };
      });
    }
    if (/[a-z]/i.test(value)) {
      setErrors((prev) => {
        prev.containeLetter = "";
        return { ...prev };
      });
    }
    if (/[0-9]/.test(value) === true) {
      setErrors((prev) => {
        prev.containeDigit = "";
        return { ...prev };
      });
    }
    if (/[!@#$%^&*]/.test(value) === true) {
      setErrors((prev) => {
        prev.specialCharacter = "";
        return { ...prev };
      });
    }
    if (regPass.test(value)) {
      setErrors((prev) => {
        prev.success = "Your password is valid";
        prev.fail = "";
        return { ...prev };
      });
    } else {
      setErrors((prev) => {
        prev.success = "";
        return { ...prev };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      setPassMatched("Password dosen't matched");
      return;
    }
    console.log(details);
    // window.location.reload();
  };
  return (
    <section className="register-background py-8">
      <div className="md:px-14 px-4">
        <div className="grid pt-28 md:grid-cols-2 grid-cols-1">
          <div className="img-box flex items-center py-5 mt-0">
            <div className="px-5 mt-md-5">
              <h1
                className="py-4 md:text-4xl text-3xl text-white"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Plan your next dream trip. Select your destination and leave the
                rest to us.
              </h1>
              <button className="bg-white py-2 px-8 uppercase font-semibold transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-gray-800 py-4 text-white px-5">
            <h2 className="text-3xl text-white font-light mb-4">Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <label htmlFor="name" className="mb-2 texl-white">
                  Name
                </label>
                <div className="border flex items-center w-100 px-2 py-2">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    className="bg-transparent focus:outline-none border-0 w-full mx-3 text-white"
                    type="text"
                    name="name"
                    onBlur={HandleBlur}
                    required
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="mb-2 text-white">
                  Email
                </label>
                <div className="border flex items-center w-100 px-2 py-2 w-full">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    className="bg-transparent w-full border-0 mx-3 text-white focus:outline-none"
                    type="email"
                    onBlur={HandleBlur}
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="mb-2 text-white">
                  Password
                </label>
                <div className="border flex items-center w-100 px-2 py-2 w-full">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                  <input
                    className="bg-transparent w-full border-0 mx-3 text-white focus:outline-none"
                    type="password"
                    onChange={HandleChange}
                    name="password"
                    required
                  />
                </div>
                <small className="text-yellow-500 block">
                  {errors?.passLength}
                </small>
                <small className="text-yellow-500 block">
                  {errors?.containeLetter}
                </small>
                <small className="text-yellow-500 block">
                  {errors?.containeDigit}
                </small>
                <small className="text-yellow-500 block">
                  {errors?.specialCharacter}
                </small>
                <small className="text-green-500 block">
                  {errors?.success}
                </small>
                <small className="text-red-500 block">{errors?.fail}</small>
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="mb-2 text-white">
                  Confirm Pssword
                </label>
                <div className="border flex items-center w-full px-2 py-2">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    className="bg-transparent w-full border-0 mx-3 text-white focus:outline-none"
                    type="password"
                    onBlur={HandleBlur}
                    name="confirmPassword"
                    required
                  />
                </div>
                <small className="text-red-500 block">{passMatched}</small>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <h6 className="fw-light">
                  Already a member?{" "}
                  <Link to="/login" className="fw-normal text-white">
                    Sign In
                  </Link>
                </h6>
                <button
                  type="submite"
                  className="mt-3 px-4 py-2 bg-white text-black font-semibold uppercase transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

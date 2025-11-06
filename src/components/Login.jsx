import React from "react";
import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";

const login = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("riya@gmail.com");
  const [password, setPassword] = useState("Riya@123");

  //   const handleLogin = async () => {
  //     try {
  //       const res = await axios.post(
  //         `${BASE_URL}/login`,
  //         { email, password },
  //         { withCredentials: true }
  //       );
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   const handleSignUp = async () => {
  //     try {
  //       const res = await axios.post(
  //         BASE_URL + "/signup",
  //         { firstName, lastName, email, password , role},
  //         { withCredentials: true }
  //       );
  //     } catch (err) {
  //       console.log("Something went wrong!");
  //     }
  //   };

  return (
    <div className="bg-white flex justify-center mb-8 ">
      <div
        className="bg-white border shadow-md w-110 mt-12 p-2 rounded-lg  border-gray-100"
      >
        <h1 className="font-bold text-black flex justify-center text-3xl p-2">
          {isLoginPage ? "Login" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <>
            <div>
              <label htmlFor="FirstName" className="text-black text-bold p-2">
                <div className="lable mt-2">
                  <span className="lable-text mt-2 p-1">First Name:</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your first name "
                  className="input input-bordered w-full max-w-xl mt-2 p-1 "
                  onChange={(e) => setfirstName(e.target.value)}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="LastName" className="text-black text-bold p-2">
                <div className="lable mt-2">
                  <span className="lable-text mt-2 p-1">Last Name:</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your last name"
                  className="input input-bordered w-full max-w-xl mt-2 p-1"
                  onChange={(e) => setlastName(e.target.value)}
                ></input>
              </label>
            </div>
          </>
        )}
        <div>
          <label htmlFor="LastName" className="text-black text-bold p-2">
            <div className="lable mt-2">
              <span className="lable-text mt-2 p-1">Email Id:</span>
            </div>
            <input
              type="text"
              value={email}
              placeholder="Enter your last name"
              className="input input-bordered w-full max-w-xl mt-2 p-1"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="LastName" className="text-black text-bold p-2">
            <div className="lable mt-2">
              <span className="lable-text mt-2 p-1">Password:</span>
            </div>
            <input
              type="text"
              value={password}
              placeholder="Enter your last name"
              className="input input-bordered w-full max-w-xl mt-2 p-1"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="flex justify-center m-4">
          <button
            className="text-white bg-black text-xl font-semibold rounded-xl p-2 w-full  hover:bg-gray-900 mt-6"
            // onClick={isLoginPage ? handleLogin : handleSignUp}
          >
            {isLoginPage ? "Login" : "Sign Up"}
          </button>
        </div>
        <p
          className="m-auto cursor-pointer py-2 text-black text-center"
          onClick={() => setIsLoginPage((value) => !value)} //toggle
        >
          {isLoginPage
            ? "New User?  Signup Here "
            : "Existing User?  Login Here"}
        </p>
      </div>
    </div>
  );
};

export default login;

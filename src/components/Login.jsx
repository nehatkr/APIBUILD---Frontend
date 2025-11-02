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
    <div className="bg-white flex justify-center">
      <div className="bg-black border-2 w-110 h-auto mt-16 p-4 rounded-lg ">
        <h1 className="font-bold text-white flex justify-center text-3xl p-2">
          {isLoginPage ? "Login" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <>
            <div>
              <label htmlFor="FirstName" className="text-white text-bold p-2">
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
              <label htmlFor="LastName" className="text-white text-bold p-2">
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
            <div>
              <label
                htmlFor="role"
                className="flex items-center gap-2 cursor-pointer text-white pt-2"
              >
                Select role:
                    <span>
              <select
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                
              >
                <option value="user" className="bg-white">User</option>
                <option value="admin" className="bg-white">Admin</option>
              </select>
              </span>
              </label>
          
            </div>
          </>
        )}
        <div>
          <label htmlFor="LastName" className="text-white text-bold p-2">
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
          <label htmlFor="LastName" className="text-white text-bold p-2">
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
            className="text-black bg-white text-xl font-semibold rounded-xl p-2 w-full  hover:bg-gray-300 mt-6"
            // onClick={isLoginPage ? handleLogin : handleSignUp}
          >
            {isLoginPage ? "Login" : "Sign Up"}
          </button>
        </div>
        <p
          className="m-auto cursor-pointer py-2 text-white text-center"
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

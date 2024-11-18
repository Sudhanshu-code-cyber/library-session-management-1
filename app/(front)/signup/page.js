"use client";
import React, { useState } from 'react';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const hideShow = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const minLength = /^.{8,}$/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /\d/;
    const specialChar = /[!@#$%^&*]/;

    if (!minLength.test(password)) {
      return "Password must be at least 8 characters long.";
    }
    if (!upperCase.test(password)) {
      return "Password must contain at least 1 uppercase letter.";
    }
    if (!lowerCase.test(password)) {
      return "Password must contain at least 1 lowercase letter.";
    }
    if (!number.test(password)) {
      return "Password must contain at least 1 digit.";
    }
    if (!specialChar.test(password)) {
      return "Password must contain at least 1 special character.";
    }

    return ""; // No errors
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const error = validatePassword(newPassword);
    if (error) {
      setIsValid(false);
      setErrorMsg(error);
    } else {
      setIsValid(true);
      setErrorMsg("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="w-full max-w-md p-8 bg-[#b1e7eb] rounded-lg shadow-2xl space-y-6">
        <h1 className="text-2xl font-bold text-[#4A628A] text-center">Login or Sign Up</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border-b-2 border-[#4A628A] focus:outline-none focus:border-[#7AB2D3] rounded-md"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={handlePasswordChange}
              value={password}
              placeholder="Password"
              className="w-full px-4 py-2 border-b-2 border-[#4A628A] focus:outline-none focus:border-[#7AB2D3] rounded-md"
            />
            <span
              onClick={hideShow}
              className="absolute right-4 top-2 cursor-pointer text-[#7AB2D3] font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {!isValid && <p className="text-red-500 text-sm">{errorMsg}</p>}
          {isValid && <p className="text-green-500 text-sm">Password is valid!</p>}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border-b-2 border-[#4A628A] focus:outline-none focus:border-[#7AB2D3] rounded-md"
            />
            <span
              onClick={hideShow}
              className="absolute right-4 top-2 cursor-pointer text-[#7AB2D3] font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <button className="w-full bg-[#7AB2D3] text-white py-2 rounded-md font-semibold hover:bg-[#4A628A] transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;

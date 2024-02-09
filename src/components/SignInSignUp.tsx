"use client";
import React, { useState } from "react";
import SignInForm from "./form/SignInForm";
import SignUpForm from "./form/SignUpForm";

enum Mode {
  SignIn,
  SignUp,
}

const MainComponent: React.FC = () => {
  const [mode, setMode] = useState(Mode.SignIn);

  const toggleMode = (selectedMode: Mode) => {
    setMode(selectedMode);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around w-full">
        <div
          className={`w-full text-sm font-sans p-4 h-full text-center font-semibold cursor-pointer ${
            mode === Mode.SignUp ? "bg-white" : ""
          }`}
          onClick={() => toggleMode(Mode.SignUp)}
        >
          SIGN UP
        </div>
        <div
          className={`w-full text-sm font-sans p-4 h-full text-center font-semibold cursor-pointer ${
            mode === Mode.SignIn ? "bg-white" : ""
          }`}
          onClick={() => toggleMode(Mode.SignIn)}
        >
          SIGN IN
        </div>
      </div>

      <div className="w-full">
        <div
          style={{ display: mode === Mode.SignIn ? "block" : "none" }}
          className="w-full"
        >
          <SignInForm />
        </div>
        <div
          style={{ display: mode === Mode.SignUp ? "block" : "none" }}
          className="w-full"
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

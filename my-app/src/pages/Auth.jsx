import React, { useState } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("signin")}
          className={`py-2 px-4 rounded hover:bg-slate-100 hover:text-black ${
            activeTab === "signin" ? "border-b border-green-500 text-black" : ""
          }`}
        >
          Giriş Yap
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`py-2 px-4 rounded hover:bg-slate-100 hover:text-black ${
            activeTab === "signup"
              ? "border-b-2 border-green-500 text-black"
              : ""
          }`}
        >
          Kayıt Ol
        </button>
      </div>

      {activeTab === "signin" ? (
        <SignIn />
      ) : (
        <SignUp setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

export default Auth;

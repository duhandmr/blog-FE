import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-xl font-bold">Blog</div>
        <button
          onClick={handleLogout}
          className="border-b-2 py-2 px-4  hover:border-red-400 hover:text-red-400"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

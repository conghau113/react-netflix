import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user.email);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/react-netflix/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between w-full z-[100] p-4 absolute">
      <Link to="/react-netflix/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/react-netflix/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/react-netflix/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to="/react-netflix/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

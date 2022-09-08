import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      navigate('/react-netflix/')
    } catch (error) {
      // console.log(error);
      setError(error.message)
    }
  }

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/2e21f5ae-4f34-47da-80fb-bf55bc06a297/VN-en-20220829-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              {error ? <p className="text-red-600 my-1">Wrong email or password?</p> : null}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
                />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="flex justify-between items-center">
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">New to Netflix?</span>{" "}
                <Link to="/react-netflix/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

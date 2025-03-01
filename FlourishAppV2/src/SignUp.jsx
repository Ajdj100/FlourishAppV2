import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
  
  const navigate = useNavigate();
  function gotoLogin() {
    navigate("/");
  }

  const handleUserName = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSignUp=async(e)=>{
    e.preventDefault();
    try{
      
      const response=await fetch("http://10.144.112.144:8080/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({username,password})
      });
      if(response.status===200){
        navigate("/Dashboard",{state:{username}});
        const data=await response.json();
        const userId=data.userId;
        sessionStorage.setItem("userId",userId);
      }
      else{
        setError("Invalid user name or password");
      }
    }
    catch(error){
      setError("An error occured")
    }
  };
  return (
    <div className="h-screen w-screen bg-[#84C981] flex justify-center items-center">
      <div className="flex w-[90%] h-[85%] bg-amber-50 shadow rounded-3xl overflow-hidden">
        <div className="firstHalf w-1/2 flex flex-col justify-center items-center p-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Sign Up</h2>

          <form className="space-y-4 w-3/4">
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700 p-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                onChange={handleUserName}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700 p-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                onChange={handlePassword}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700 p-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </form>

          <button onClick={handleSignUp} className="mt-6 w-3/4 bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition duration-200">
            Sign Up
          </button>

          <div className="w-3/4 mt-8 border-t border-gray-300"></div>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-600">Already have an account?</p>
            <button
              className="mt-2 text-blue-600 hover:underline font-medium"
              onClick={gotoLogin}
            >
              Log in
            </button>
          </div>
        </div>

        <div className="secondHalf w-1/2 flex flex-col justify-between items-center bg-[#e2e2e23f] shadow-lg rounded-l-4xl p-10">
          <h1 className="text-4xl font-bold">Welcome to Flourish</h1>
          <img src="./src/assets/tree.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

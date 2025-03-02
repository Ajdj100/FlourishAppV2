import React from "react";
import { useLocation } from "react-router-dom";
import MyTask from "./MyTask";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || { username: "user" };
  return (
    <div className="h-screen w-screen bg-[#84C981] flex flex-col space-y-4 items-center p-3">
      <div className="w-[90%] bg-[#f1f1f1] h-[10%] rounded-3xl px-6 py-4 text-center flex justify-between shadow-md shadow-green-900">
        <h1 className="text-3xl font-bold">Flourish🌿</h1>
        <h1 className="text-xl cursor-pointer text-red-700 hover:font-bold">
          Logout
        </h1>
      </div>
      <div className="flex w-[90%] h-full justify-between shadow-2xl">
        <div className="flex w-[48%] flex-col bg-[#e2e2e2d3] shadow-lg shadow-green-950 rounded-3xl overflow-hidden p-6">
          <h1 className="text-2xl">
            Great job {username}👏, Your progress is blooming! ☘️
          </h1>
          <div
            className="todo bg-[#f1f1f1] min-h-[40%] w-full rounded-2xl p-4 mt-3 shadow-md"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="text-xl ">My Today's Tasks</h1>
          </div>
          {/* My Task Section */}
          <MyTask />
        </div>
        <div className="flex w-[51%] flex-col bg-[#e2e2e2d3] rounded-3xl overflow-hidden p-10 shadow-lg shadow-green-950">
          <h1>Tree Area</h1>
          <img src="./src/assets/tree.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

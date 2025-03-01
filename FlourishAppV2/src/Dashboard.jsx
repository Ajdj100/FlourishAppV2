import React from "react";
import MilestoneBar from "./components/milestoneBar";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#84C981] flex justify-center items-center">
      <div className="flex w-[90%] h-[85%] bg-amber-100 shadow rounded-3xl overflow-hidden">
        <div className="flex mx-auto flex-col justify-center w-full px-12">
          <MilestoneBar currentGrowth={3} growthGoal={7}></MilestoneBar>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

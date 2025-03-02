import HistoryView from "./components/historyView";
import MilestoneBar from "./components/milestoneBar";
import Tree from "./components/TreeBuilder";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const getData = async (id) => {
  const userId = sessionStorage.getItem("userId");

  try {
    const response = await fetch("http://10.144.112.144:8080/treedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskId: Number(id) }),
    });
    if (response.status === 200) {
      let json = await response.json();
      return json;
    }
  } catch (e) {
    console.log(e);
  }
};

export default function TaskView() {
  let goal = 14;
  let cur = 8;
  const {taskId} =useContext(TaskContext);

  const [treeJSON, setTreeJSON] = useState(null);

  useEffect(() => {
    console.log("running use effct")
    const fetchData = async () => {
      try {
        const data = await getData(taskId);
        setTreeJSON(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [taskId]); 

  if (treeJSON == null) {
    return <div></div>;
  } else {
    console.log(treeJSON[0]);
  }

  return (
    <>
    
      <div className="flex flex-col h-full space-y-3 justify-end">
        <div className="tree-wrapper flex justify-center items-center">
          <Tree treeHeight={treeJSON[0].daysCompleted}></Tree>
        </div>
        <div className="flex flex-col space-y-10 items-center">
          <MilestoneBar
            growthGoal={goal}
            currentGrowth={treeJSON[0].daysCompleted}
          ></MilestoneBar>
          <HistoryView historyArray={treeJSON[0].days}></HistoryView>
        </div>
      </div>
      
    </>
  );
}

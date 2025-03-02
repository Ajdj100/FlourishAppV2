import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyTask from "./MyTask";

import { Navigate, useNavigate } from "react-router-dom";

import TaskView from "./TaskView";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || { username: "user" };
  const userId = sessionStorage.getItem("userId");
  console.log(userId);
  const [Tasks, setTasks] = useState([]);
  const [reload,setReload]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://10.144.112.144:8080/todaytasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: Number(userId) }),
        });
        if (response.status === 200) {
          console.log(response);
          const data = await response.json();
          console.log(data);
          setTasks(data);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchTasks();
  }, [reload]);

  function handlelogOut() {
    navigate("/");
  }

  const handleCheck = async (taskId, status) => {
    console.log(taskId);
    console.log(status);
    try {
      const response = await fetch("http://10.144.112.144:8080/updatetask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: Number(userId),
          taskId: Number(taskId),
          status: !status,
        }),
      });
      if(response.status===200){
        console.log("sent status to the server");
        setReload(!reload);
      }
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#84C981] flex flex-col space-y-4 items-center p-3">
      <div className="w-[90%] bg-[#f1f1f1] h-[10%] rounded-3xl px-6 py-4 text-center flex justify-between shadow-md shadow-green-900">
        <h1 className="text-3xl font-bold">Flourish🌿</h1>
        <button
          onClick={handlelogOut}
          className="text-xl cursor-pointer hover:underline"
        >
          Logout
        </button>
      </div>
      <div className="flex w-[90%] h-[90%] justify-between shadow-2xl">
        <div className="flex w-[48%] flex-col bg-[#e2e2e2d3] shadow-lg shadow-green-950 rounded-3xl overflow-hidden p-6">
          <h1 className="text-2xl pl-4">
            Great job {username}!👏 Your progress is blooming☘️
          </h1>
          <div
            className="todo bg-[#f1f1f1] h-[30%] rounded-2xl p-4 mt-3 mx-4 shadow-md "
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="text-xl pl- font-semibold">My Today's Tasks</h1>
            <div className="list-none p-4 space-y-1  h-[90%] overflow-y-auto">
              {!Tasks || Tasks.length===0?<p>Add a new Task!</p>:
              Tasks.map((task) => {
                return (
                  <li
                    key={task.taskId}
                    className={`text-lg flex items-center ${
                      task.taskCompleted ? "line-through text-gray-500" : ""
                    } `}
                  >
                    <input
                      type="checkbox"
                      className="p-2 mr-1 size-4"
                      checked={task.taskCompleted}
                      onChange={() =>
                        handleCheck(task.taskId, task.taskCompleted)
                      }
                    />
                    {task.taskName}
                  </li>
                );
              })}
            </div>
          </div>

          {/* My Task Section */}
          <MyTask setRefresh={setReload} />
        </div>
        <div className="flex w-[51%] flex-col bg-[#e2e2e2d3] rounded-3xl overflow-hidden p-10 shadow-lg shadow-green-950">
              <TaskView></TaskView>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

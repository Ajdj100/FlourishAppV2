import React, { useState } from "react";
import users from "./assets/user.svg";
import add from "./assets/add.svg";
import dltBtn from "./assets/delete.svg";

const MyTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      taskName: "Task name",
      treeHeight: 100,
      taskIcon: 3,
    },
  ]);

  const addTask = () => {
    setIsOpen(true);
  };

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
    console.log("Task Name: ", e.target.value);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (taskName !== "") {
      const newTask = {
        id: taskList.length + 1,
        taskName: taskName,
        treeHeight: 0,
        taskIcon: 1,
      };
      setTaskList((prevList) => [...prevList, newTask]);
      setTaskName("");
    } else {
      console.log("Task name and icon are empty");
    }
  };

  const deleteTask = (id) => {
    setTaskList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <div className="mytasks p-4 mt-3">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl pl-4 font-semibold ">My Tasks</h1>
        <img
          src={add}
          alt=""
          onClick={addTask}
          className="cursor-pointer px-1"
        />
      </div>

      {/* First task */}
      {taskList.map((task) => {
        return (
          <div
            key={task.id}
            className="text-black bg-[#f1f1f1] w-full rounded-2xl p-3 mt-3 shadow-md flex-col"
          >
            <div className="flex justify-between items-center my-2 px-3">
              <div>
                <p>{task.taskName}</p>
              </div>
              <div className="hover:bg-red-300 px-1 rounded-full cursor-pointer">
                <img
                  src={dltBtn}
                  alt=""
                  onClick={() => deleteTask(task.id)}
                  className="my-1"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between px-3 my-2">
                <div>
                  <p>{task.treeHeight}</p>
                </div>
                <div className="flex items-end px-1">
                  <span className="pr-1">{task.taskIcon}</span>
                  <img src={users} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      <div className="relative">
        {isOpen && (
          <div className="fixed inset-0 text-white bg-[#8a8a8a] bg-opacity-50 backdrop-blur-md flex justify-center items-center">
            <form action="">
              <div className="m-3">
                <label htmlFor="taskName" className="mx-3">
                  Task Name
                </label>
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  className="bg-white text-black"
                  value={taskName}
                  onChange={handleTaskName}
                />
              </div>
              <div className="text-white flex justify-around text-sm mt-3">
                <button onClick={handleSaveTask}>Save</button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTask;

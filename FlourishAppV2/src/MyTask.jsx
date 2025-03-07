import React, { useContext, useEffect, useState } from "react";
import users from "./assets/user.svg";
import add from "./assets/add.svg";
import dltBtn from "./assets/delete.svg";
import { TaskContext } from "./TaskContext";
import CreateTaskModal from "./components/createTaskModal";
import JoinTaskModal from "./components/joinTaskModal";

const MyTask = ({ setRefresh }) => {
  const userId = sessionStorage.getItem("userId");
  const [isOpen, setIsOpen] = useState(false);
  const { setTaskId } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [reload, setReload] = useState(false);
  const [joinMode, setJoinMode] = useState(false)
  const contextValue = useContext(TaskContext);
  console.log(contextValue);

  const addTask = () => {
    setIsOpen(true);
  };

  function closeModal() {
    console.log("close")
    setIsOpen(false);
  }

  function toggleJoinMode() {
    setJoinMode(!joinMode);
  }


  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const response = await fetch("http://10.144.112.144:8080/usertasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: Number(userId) }),
        });
        if (response.status === 200) {
          console.log("yayyyy!!");
          const data = await response.json();
          console.log(data);
          setTaskList(data);
        }
       
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserTasks();
  }, [reload]);

  const deleteTask = async (id) => {
    try {
      const response = await fetch("http://10.144.112.144:8080/deletetask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: Number(userId), taskId: Number(id) })
      });
      if (response.status === 200) {
        console.log("deleetd user");
        setReload(!reload);
        setRefresh(prev => !prev);
      }
    }
    catch (e) {
      console.log("cannot delete task lollll")
    }
  };

  return (
    <div className="mytasks p-4 mt-3">
      <div className="flex items-center justify-between mb-6 ">
        <h1 className="text-xl pl-2 font-semibold ">My Tasks</h1>
        <img
          src={add}
          alt=""
          onClick={addTask}
          className="cursor-pointer px-1"
        />
      </div>
      <div className="max-h-[270px] overflow-y-auto pr-2 space-y-3">
        {!taskList || taskList.length === 0 ? <p className="p-2">Add a new Task!</p> :
          taskList.map((task) => {
            return (
              <div
                key={task.taskId}
                className="text-black bg-[#f1f1f1] w-full rounded-2xl p-1 shadow-md flex-col cursor-pointer hover:shadow-xl"
                onClick={() => {
                  setTaskId(task.taskId)
                }}
              >
                <div className="flex justify-between items-center my-1 px-3 ">
                  <div>
                    <p>{task.taskName}</p>
                  </div>
                  <div className="hover:bg-red-300 px-1 rounded-full cursor-pointer">
                    <img
                      src={dltBtn}
                      alt=""
                      onClick={() => deleteTask(task.taskId)}
                      className="my-1"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between px-3 my-2">
                    <div>
                      <p>{task.daysCompleted}</p>
                    </div>
                    <div className="flex items-end px-1">
                      <span className="pr-1">{task.userNum}</span>
                      <img src={users} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Modal */}
      <div className="relative">
        {isOpen && (
          <div className="fixed z-50 inset-0 bg-[#8a8a8a44] bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center">
            <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
              <div>
                {joinMode ? <JoinTaskModal userId={userId} closeFunc={closeModal}></JoinTaskModal> :<CreateTaskModal userId={userId} closeFunc={closeModal}></CreateTaskModal>}
              </div>

              <a className="cursor-pointer text-center" onClick={toggleJoinMode}>{!joinMode ? "Have a code to join a friend's task?" : "Want to create a new task? Click here!"}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTask;

import { useState } from "react";

export default function CreateTaskModal({ userId }) {
    const [taskName, setTaskName] = useState("");

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
        console.log("Task Name: ", e.target.value);
    };

    const handleSaveTask = async (e) => {

        try {
            const response = await fetch("http://10.144.112.144:8080/newtask", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({ userId: Number(userId), taskName: taskName }),
            });
            if (response.status === 200) {
                console.log("wohooooo");
                setRefresh(prev => !prev)

            }
        } catch (e) {
            console.log(e);
        }
        setReload(!reload);
    };

    return (
        <>
            <h1 className="font-bold text-center pb-5">Create a new task!</h1>

            <div className="m-3">
                <label htmlFor="taskName" className="mx-3">
                    Task Name
                </label>
                <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    className="bg-white text-black py-1 px-2 rounded-sm border"
                    value={taskName}
                    onChange={handleTaskName}
                />
            </div>
            <div className="text-white flex justify-around mt-8">
                <button
                    onClick={handleSaveTask}
                    className="bg-black py-2 rounded-sm cursor-pointer w-[100px]"
                >
                    Save
                </button>
                <button className="border-2 border-black text-black py-2 rounded-sm cursor-pointer w-[100px]">
                    Cancel
                </button>
            </div>

        </>
    )
}
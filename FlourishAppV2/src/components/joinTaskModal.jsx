import { useState } from "react";

export default function JoinTaskModal({ userId, closeFunc }) {
    const [joinCode, setJoinCode] = useState("");

    const handleTaskName = (e) => {
        setJoinCode(e.target.value);
        console.log("Task Name: ", e.target.value);
    };

    const handleSaveTask = async (e) => {

        try {
            const response = await fetch("http://10.144.112.144:8080/jointask", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({ userId: Number(userId), taskCode: joinCode }),
            });
            if (response.status === 200) {
                console.log("wohooooo");
                closeFunc();

            }
        } catch (e) {
            console.log(e);
        }
        setReload(!reload);
    };

    return (
        <>
        <h1 className="font-bold text-center pb-5">Join a friend's task!</h1>
            <div className="m-3">
                <label htmlFor="joinCode" className="mx-3">
                    Join Code
                </label>
                <input
                    type="text"
                    name="joinCode"
                    id="joinCode"
                    className="bg-white text-black py-1 px-2 rounded-sm border"
                    value={joinCode}
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
                <button 
                onClick={closeFunc}
                className="border-2 border-black text-black py-2 rounded-sm cursor-pointer w-[100px]">
                    Cancel
                </button>
            </div>

        </>
    )
}
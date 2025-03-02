import HistoryView from "./components/historyView";
import MilestoneBar from "./components/milestoneBar";
import Tree from "./components/TreeBuilder";
import { useEffect, useState } from "react";

const getData = async (id) => {

    const userId = sessionStorage.getItem("userId");
    id = 27;

    try {
        const response = await fetch("http://10.144.112.144:8080/treedata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ taskId: Number(id) })
        });
        if (response.status === 200) {
            let json = await response.json();
            return json;
        }
    }
    catch (e) {
        console.log(e)
    }
};

export default function TaskView() {

    let goal = 14;
    let cur = 8;

    const [treeJSON, setTreeJSON] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setTreeJSON(data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (treeJSON == null) {
        return <div></div>;
    } else {
        console.log(treeJSON[0])
    }

    return (
        <>
            <h1>Tree Area</h1>
            {/* <img src="./src/assets/tree.svg" alt="" /> */}
            <Tree treeHeight={treeJSON[0].daysCompleted}></Tree>
            <MilestoneBar growthGoal={goal} currentGrowth={treeJSON[0].daysCompleted}></MilestoneBar>
            <HistoryView historyArray={treeJSON[0].days}></HistoryView>
        </>
    )
}
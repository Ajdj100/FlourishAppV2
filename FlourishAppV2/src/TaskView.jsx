import HistoryView from "./components/historyView";
import MilestoneBar from "./components/milestoneBar";
import Tree from "./components/TreeBuilder";

export default function TaskView() {

    let goal = 14;
    let cur = 8; 

    //todo: get data from server regarding this thingy

    return (
        <>

            <h1>Tree Area</h1>
            {/* <img src="./src/assets/tree.svg" alt="" /> */}
            <Tree></Tree>
            <MilestoneBar growthGoal={goal} currentGrowth={cur}></MilestoneBar>
            <HistoryView></HistoryView>
        </>
    )
}
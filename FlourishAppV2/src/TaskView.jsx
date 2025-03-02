import MilestoneBar from "./components/milestoneBar";

export default function TaskView() {

    let goal = 14;
    let cur = 8; 

    //todo: get data from server regarding this thingy

    return (
        <>

            <h1>Tree Area</h1>
            <img src="./src/assets/tree.svg" alt="" />
            <MilestoneBar growthGoal={goal} currentGrowth={cur}></MilestoneBar>
        </>
    )
}
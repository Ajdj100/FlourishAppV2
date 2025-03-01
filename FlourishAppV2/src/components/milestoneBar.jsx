export default function MilestoneBar({currentGrowth, growthGoal}) {

    let fill = ((currentGrowth / growthGoal) * 100).toFixed(0);
    console.log(fill);

    return (
        <>
            {/* full bar */}
            <div className="h-6 bg-white w-full rounded-2xl relative overflow-clip">
                {/* partial bar */}
                <div className="absolute bg-[#84C981] h-full" style={{width: fill + '%'}}>
                    
                </div>
                <p className="absolute left-1/2 transform -translate-x-1/2">{currentGrowth}/{growthGoal}</p>
            </div>
        </>
    )
}
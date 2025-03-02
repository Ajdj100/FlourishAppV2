export default function MilestoneBar({ currentGrowth, growthGoal }) {

    let fill = ((currentGrowth / growthGoal) * 100).toFixed(0);

    return (
        <>
            {/* full bar */}
            <div className="h-6 bg-white w-full rounded-2xl relative">
                {/* partial bar */}
                <div className="absolute bg-[#84C981] h-full rounded-2xl" style={{ width: fill + '%' }}>

                </div>
                <p className="absolute left-1/2 transform -translate-x-1/2">{currentGrowth}/{growthGoal}</p>
                <svg className="absolute -right-5 transform -translate-y-1/3 size-14 text-amber-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z"></path></g></svg>
            </div>
        </>
    )
}
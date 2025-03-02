import { useEffect, useState } from "react";

function HistoryHover({hidden, date}) {
    return(
        <>
         <p className="bg-white w-fit text-nowrap text-center transform -translate-x-2/5 -translate-y-10 rounded-md px-2 py-1" style={{display: hidden ? "block" : "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"}} >{date}</p>
        </>
    )
}

function HistoryBlock({ success, date }) {

    const [hover, setHover] = useState(false);

    if (success) {
        return (
            <div className="bg-[#84C981] w-5 h-5 m-1 rounded-sm" onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
                <HistoryHover hidden={hover} date={date}></HistoryHover>
            </div>
        )
    } else {
        return (
            <div className="bg-neutral-400 w-5 h-5 m-1 rounded-sm" onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
                <HistoryHover hidden={hover} date={date}></HistoryHover>
            </div>
        )
    }
}

function assembleDateString(today) {
    
    var day = String(today.getDate());
    var month = String(today.getMonth() + 1);
    var year = String(today.getFullYear());

    var ds = month + '-' + day + '-' + year;
    return ds;
}

export default function HistoryView({historyArray}) {

    let dayCount = 60;

    let boxes = [];

    let today = new Date();

    for (var i = 0; i < dayCount; i++) {

        boxes.push(<HistoryBlock key={i} date={assembleDateString(today)} success={historyArray[i] || false} />)
        today.setDate(today.getDate() - 1);
    }
    boxes.reverse()

    return (
        <div className="grid grid-flow-col grid-rows-4 gap-0 w-fit">
        {/* // <div className="flex flex-col flex-wrap h-36"> */}
            {boxes}
        </div>
    )
}
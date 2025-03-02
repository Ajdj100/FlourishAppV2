function HistoryBlock({ success }) {

    if (success) {
        return (
            <div className="bg-[#84C981] w-5 h-5 rounded-sm"></div>
        )
    } else {
        return (
            <div className="bg-neutral-400 w-5 h-5 m-1 rounded-sm"></div>
        )
    }

}

export default function HistoryView() {

    let dayCount = 30;

    let boxes = [];

    for (var i = 0; i < dayCount; i++) {
        boxes.push(<HistoryBlock key={i} success={false} />)
    }

    return (
        <div className="flex flex-col-reverse max-h-44 flex-wrap max-w-full">
            {boxes}
        </div>
    )
}
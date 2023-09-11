type times = {
    times: number[],
}

function TimerFlags (props: times) {
    const values  = props.times;
    let count = 0;
    return (
        <div className="flex items-center justify-center">
            <ul className="scrollbar-thin dark:scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-thumb-slate-400 overflow-auto [&>*:nth-child(odd)]:bg-slate-200 dark:[&>*:nth-child(odd)]:bg-slate-800 text-left w-52 h-60 mt-10">
                <li><span className="mr-12 ml-5">#</span><span>Time</span></li>
                {values.map(value => (
                        <li key={value} className="flex">
                            <span className="mr-12 ml-5 w-2" >{count = count + 1}</span>
                            <span className="digits hr">
                                {("0" + Math.floor(value / 360000)).slice(-2)}:
                            </span>
                            <span className="digits min">
                                {("0" + Math.floor((value % 360000) / 6000)).slice(-2)}:
                            </span>
                            <span className="digits sec">
                                {("0" + Math.floor((value % 6000) / 100)).slice(-2)}.
                            </span>
                            <span className="digits mili-sec ">
                                {("0" + (value % 100)).slice(-2)}
                            </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default TimerFlags;
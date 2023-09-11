import {useState, useEffect} from "react";
import TimerController from "./TimerController";


function Timer () {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(()=>{
        let interval: number = 0;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
              setTime((time) => time + 1);
            }, 10);
          } else {
            clearInterval(interval);
          }
          return () => {
            clearInterval(interval);
          };
        }, [isActive, isPaused]);

        const handleStart = () => {
            setIsActive(true);
            setIsPaused(false);
        };
        
        const handlePauseResume = () => {
            setIsPaused(!isPaused);
        };
        
        const handleReset = () => {
            setIsActive(false);
            setTime(0);
        };

    return (
        <div className="w-full">
            <div className="mb-6 text-3xl font-bold">
                <span className="digits hr">
                    {("0" + Math.floor(time / 360000)).slice(-2)}:
                </span>
                <span className="digits min">
                    {("0" + Math.floor((time % 360000) / 6000)).slice(-2)}:
                </span>
                <span className="digits sec">
                    {("0" + Math.floor((time % 6000) / 100)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + (time % 100)).slice(-2)}
                </span>
            </div>
            <TimerController 
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                time={time}
            />
        </div>
    )
}

export default Timer;
import { useState } from 'react';
import { MdPause, MdPlayArrow, MdStop, MdFlag } from "react-icons/md";
import  TimerFlags  from "./TimerFlags";

type timerControllerType = {
    active: boolean,
    isPaused: boolean,
    handleStart: () => void,
    handlePauseResume: () => void,
    handleReset: () => void,
    time: number
}

function TimerController(props: timerControllerType){
    const [flagTime, setFlagTime] = useState<number[]>([]);
    
    const playHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        props.handleStart();
        setFlagTime([]);
    }

    const flagHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setFlagTime([...flagTime, props.time])
    }

    return (
        <div>
            {props.active === false ? <button onClick={playHandler}><MdPlayArrow size={35}/></button> : <></>}
            {props.active === true ? 
                <button className="mr-3" onClick={props.handlePauseResume}>{props.isPaused === false ? <MdPause size={35}/> : <MdPlayArrow size={35}/>}</button>
                : <></>
            }
            {props.active === true ? 
                <button className="mr-3" onClick={props.handleReset}><MdStop size={35}/></button>
                : <></>
            }
            {props.active === true ? 
                <button  onClick={flagHandler}><MdFlag size={35}/></button>
                : <></>
            }
            <TimerFlags 
                times={flagTime}
            />
        </div>
    )
}

export default TimerController;
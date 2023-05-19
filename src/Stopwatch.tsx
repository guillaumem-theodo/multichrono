import React, {useState, useEffect} from "react";

interface WatchProps {
    triggerKey: string,
    description: string
}

const Stopwatch = (props: WatchProps) => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const triggerKeyPress: boolean = useKeyPress(props.triggerKey, setRunning, setTime);

    useEffect(() => {
        let interval: any = null;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className={running ? 'Stopwatch-active' : 'Stopwatch-inactive'}>
            <div className={running ? 'Stopwatch-key-active':'Stopwatch-key'}
                 onClick={event =>
                    {
                        if(event.altKey) {
                            setRunning(false); setTime(0); // Selective Clear
                        }
                        else {
                            setRunning(!running); // Toggle
                        }
                    }}>{props.triggerKey}</div>
            <div>{props.description}</div>
            <div className="Stopwatch-timer">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:{("0" + ((time / 10) % 100)).slice(-2)}</div>
        </div>)
};

function useKeyPress(targetKey: string,
                     setRunning: (value: (((prevState: boolean) => boolean) | boolean)) => void,
                     setTime: (value: (((prevState: number) => number) | number)) => void): boolean {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    // @ts-ignore
    function downHandler({key}): void {
        if (key === targetKey) {
            setKeyPressed(true);
            setRunning(true)
        }

        if(key === '0') {
            setKeyPressed(false);
            setRunning(false);
            setTime(0);
        }
    }

    // If released key is our target key then set to false
    // @ts-ignore
    const upHandler = ({key}): void => {
        if (key === targetKey) {
            setKeyPressed(false);
            setRunning(false)
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

export default Stopwatch;
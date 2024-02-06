import React, { useState, useEffect, useContext } from 'react';
import { RunningContext } from './App';

const Timer = () => {
    const { isRunning } = useContext(RunningContext);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let intervalId

        if(isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <h1>Timer: {seconds} seconds</h1>
    );
};

export default Timer;
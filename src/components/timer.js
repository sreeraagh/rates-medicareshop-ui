import React, { useState, useEffect } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Timer () {   

    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [minutes, seconds]);

    return (
        <Box sx={{mb:4, textAlign: "center"}}>
            <Typography sx={{mb:2}}>
                Confirm your phone number below to hold your next place in the queue and lock in your rate.
            </Typography>
            { minutes === 0 && seconds === 0 ? <Typography><b>Time expired.</b></Typography> : <Typography><b>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</b></Typography> }
        </Box>
    );
}





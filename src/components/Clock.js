import React, { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const intervalID = setInterval(() => {
            const date = new Date()
            const options = {
                weekday: 'long',
                month: 'long',
                year: 'numeric',
                hour: 'numeric', 
                minute: 'numeric',
                second: 'numeric',
                };
            setTime(new Intl.DateTimeFormat('en-US', options).format(date))
        }, 1000);

        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <div className="clock_widget">
                {time}
            </div>
        </div>
    )
}

export default Clock

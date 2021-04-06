import React, { useState, useEffect } from 'react'

function Clock() {
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")
    const [second, setSecond] = useState("")
    const [weekday, setWeekday] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")

    useEffect(() => {
        const intervalID = setInterval(() => {
            const date = new Date()
            setHour(new Intl.DateTimeFormat('en-US', {hour: 'numeric', hour12: false}).format(date))
            setMinute(new Intl.DateTimeFormat('en-US', {minute: 'numeric'}).format(date))
            setSecond(new Intl.DateTimeFormat('en-US', {second: 'numeric'}).format(date))
            setWeekday(new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date))
            setMonth(new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date))
            setYear(new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(date))
            setDay(new Intl.DateTimeFormat('en-US', {day: 'numeric'}).format(date))
        }, 1000);

        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div className="container clock_widget">
            <div className="dateWeek medium light">
                {weekday}, {month} {day}, {year}
            </div>
            <div className="time light xlarge">
                {hour + ":" + minute}<span className="seconds medium thin">{second}</span>
            </div>
        </div>
    )
}

export default Clock

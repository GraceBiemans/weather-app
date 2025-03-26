import React, { useState, useEffect } from 'react'

const WeatherDate = ({ index }) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + index);

    // console.log(today.getDate())
    // console.log(today.getDate() + index)

    const dayName = days[futureDate.getDay()];
    const monthName = months[futureDate.getMonth()];
    const dayOfMonth = futureDate.getDate();

    return (
        <div>
            {dayName}
            <br/>
            {monthName} {dayOfMonth}
        </div>
    )

}

export default WeatherDate
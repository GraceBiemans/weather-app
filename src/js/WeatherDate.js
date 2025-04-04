import React from 'react'
import '../css/weather-styles.css'

const WeatherDate = ({ index }) => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan.", "Feb.", "March", "April", "May", "June", 
                    "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + index);

    const dayName = days[futureDate.getDay()];
    const monthName = months[futureDate.getMonth()];
    const dayOfMonth = futureDate.getDate();

    return (
        <div className='weather--date'>
            {dayName}
            <br/>
            {monthName} {dayOfMonth}
        </div>
    )

}

export default WeatherDate
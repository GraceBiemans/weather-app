import React, {useEffect, useState} from 'react'

const WeatherData = ({selectedCityObject}) => {

    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cityData, setCityData] = useState(selectedCityObject);

    let url = `http://www.7timer.info/bin/api.pl?lon=${cityData.longitude}&lat=${cityData.latitude}&product=civillight&output=json`;

    useEffect(() => {
        setCityData(selectedCityObject);
    }, [selectedCityObject])

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true);

                const response = await fetch(url);
                const data = await response.json();

                if (data && data.dataseries) {
                    setWeatherData(data.dataseries);
                } else {
                    setError('No weather data found');
                }
            } catch (err) {
                setError('Error fetching weather data');
                console.error('Error fetching weather data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [cityData]);

    return (
        <div>
            {loading && <p>Loading weather data...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div id="weather-container">
                {weatherData.length > 0 ? (
                weatherData.map((entry, index) => (
                    <div key={index} className="weather-item">
                    <strong>Weather:</strong> {entry.weather}
                    </div>
                ))
                ) : (
                <p>No weather data available.</p>
                )}
            </div>
        </div>
    )
}

export default WeatherData;

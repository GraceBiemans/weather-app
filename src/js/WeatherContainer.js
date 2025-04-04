import React, { useEffect, useState, useCallback } from 'react';
import DayWeather from './DayWeather';
import { ThreeDot } from 'react-loading-indicators';
import '../css/weather-styles.css'

const WeatherData = ({ selectedCityObject }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const cityData = selectedCityObject;

    const url = `https://www.7timer.info/bin/api.pl?lon=${cityData.longitude}&lat=${cityData.latitude}&product=civillight&output=json`;

    const fetchWeatherData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data?.dataseries) {
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
    }, [cityData, url]);

    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);

    const renderLoading = () => (
        <span>
            <ThreeDot variant="bounce" color="#ADD8E6" size="medium" />
            <p>Loading weather data...</p>
        </span>
    );

    const renderError = () => <p style={{ color: 'red' }}>{error}</p>;

    const renderWeatherItems = () => {
        if (weatherData.length === 0) {
            return <p>No weather data available.</p>;
        }

        return weatherData.map((entry, index) => (
            <div key={index} className="weather--item tooltip">
                <DayWeather weatherType={entry.weather} index={index} />
            </div>
        ));
    };

    return (
        <div>
            <div className='weather--messages'>
                {loading && renderLoading()}
                {error && renderError()}
            </div>

            {!loading && !error && <div id="weather--container">{renderWeatherItems()}</div>}
        </div>
    );
};

export default WeatherData;

import './App.css';
import React, {useState} from 'react'
import WeatherData from './js/WeatherData';
import CityDropdown from './js/CityDropdown';

function App() {

  const [selectedCity, setSelectedCity] = useState({
      'city': '',
      'longitude': null,
      'latitude': null
    }
  );

  const handleCityChange = (cityObject) => {
    setSelectedCity(cityObject);
  };

  return (
    <div>
      <CityDropdown onCityChange={handleCityChange}/>

      {selectedCity.city && (
        <div>
          <p>Weather for {selectedCity.city}</p>
          <WeatherData selectedCityObject={selectedCity}/>
        </div>
      )
    }
    </div>
  );
}

export default App;

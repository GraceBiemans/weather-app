import './App.css';
import React, {useState} from 'react'
import WeatherContainer from './js/WeatherContainer';
import CityDropdown from './js/CityDropdown';

function App() {

  const [selectedCity, setSelectedCity] = useState({}
  );

  const handleCityChange = (cityObject) => {
    setSelectedCity(cityObject);
  };

  return (
    <div>
      <h1>European Weather Forecast</h1>

      <CityDropdown onCityChange={handleCityChange}/>

      {selectedCity.city && (
        <div>
          <WeatherContainer selectedCityObject={selectedCity}/>
        </div>
      )
    }
    </div>
  );
}

export default App;

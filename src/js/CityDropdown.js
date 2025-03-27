import React, { useState } from 'react';
import cityData from '../city_coordinates.json';
import '../css/city-dropdown.css';

const CityDropdown = ({ onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = cityData;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.city);
    onCityChange(option);
    setIsOpen(false);
  };

  return (
    <div className="city-dropdown--container">
      <div className="city-dropdown" onClick={toggleDropdown}>
        <div className="city-dropdown--selected">
          {selectedOption || 'Select a city'}
        </div>

        {isOpen && (
          <ul className="city-dropdown--options">
            {options.map((option) => (
              <li
                key={option.city}
                className="city-dropdown--option"
                onClick={() => handleOptionSelect(option)}
              >
                {option.city}, {option.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CityDropdown;


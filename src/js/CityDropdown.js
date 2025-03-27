import React, { useState } from 'react';
import cityData from '../city_coordinates.json';
import '../css/CityDropdown.css';

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
      <div className="custom-dropdown" onClick={toggleDropdown}>
        <div className="dropdown-selected">
          {selectedOption || 'Select a city'}
        </div>

        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option) => (
              <li
                key={option.city}
                className="dropdown-option"
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


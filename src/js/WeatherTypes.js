const WeatherTypes = {
    clear: {
      label: 'Clear',
      icon: '☀️',
      description: 'Total cloud cover less than 20%'
    },
    pcloudy: {
      label: 'Partly Cloudy',
      icon: '🌤️',
      description: 'Total cloud cover between 20%-60%'
    },
    mcloudy: {
      label: 'Mostly Cloudy',
      icon: '🌥️',
      description: 'Total cloud cover between 60%-80%'
    },
    cloudy: {
      label: 'Cloudy',
      icon: '⛅️',
      description: 'Total cloud cover over over 80%'
    },
    humid: {
      label: 'Humid',
      icon: '🌤️',
      description: 'Relative humidity over 90% with total cloud cover less than 60%'
    },
    lightrain: {
      label: 'Light Rain',
      icon: '🌧️',
      description: 'Precipitation rate less than 4mm/hr with total cloud cover more than 80%'
    },
    oshower: {
      label: 'Occasional Showers',
      icon: '🌦️',
      description: 'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%'
    },
    ishower: {
      label: 'Isolated Showers',
      icon: '🌦️',
      description: 'Precipitation rate less than 4mm/hr with total cloud cover less than 60%'
    },
    lightsnow: {
      label: 'Light Snow',
      icon: '🌨️',
      description: 'Precipitation rate less than 4mm/hr'
    },
    rain: {
      label: 'Rain',
      icon: '🌧️',
      description: 'Precipitation rate over 4mm/hr'
    },
    snow: {
      label: 'Snow',
      icon: '🌨️',
      description: 'Precipitation rate over 4mm/hr'
    },
    rainsnow: {
      label: 'Rain & Snow',
      icon: '🌧️',
      description: 'Precipitation type to be ice pellets or freezing rain'
    }
  };

export default WeatherTypes
import React from 'react';
import WeatherIcons from 'react-weathericons';
import{ CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

// Library of icons created
const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog'
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState]; // That is equal to icons.weatherState
    const sizeIcon = "4x";
    if (icon){
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    } else {
        return <WeatherIcons className="wicon" name={'na'} size={sizeIcon}/>;
    }
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
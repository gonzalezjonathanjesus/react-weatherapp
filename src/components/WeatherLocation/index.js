import React from 'react'; // Import React class from react package
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import{ SUN } from './../../constants/weathers'; //Only import constants which we will use and not all for lightweight code

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: `10 m/s`,
}

const WeatherLocation = () => ( // Functional component. The most simple component that can be created
    <div className="weatherLocationCont">
        <Location city={'Barcelona'}></Location>
        <WeatherData data={data}></WeatherData>
    </div> // Babel JSX template that will be rendered
);

export default WeatherLocation; // The rest of the app can be invoke it because we use default
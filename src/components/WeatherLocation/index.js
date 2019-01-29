import React, { Component } from 'react'; // Import React class from react package
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import{ SUN, WINDY } from './../../constants/weathers'; //Only import constants which we will use and not all for lightweight code

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: `10 m/s`,
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: `19 m/s`,
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = { // Only can be modify on the constructor, after constructor you must to use this.setState(); 
            city: 'Buenos Aires',
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log('Actualizado');

        this.setState({ // No es necesario pasar los datos que no van a ser actualizados
            data: data2
        });
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div> // Babel JSX template that will be rendered
        );
    }
};

export default WeatherLocation; // The rest of the app can be invoke it because we use default
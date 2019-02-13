import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';


// Componente functional, componente que no tiene estado, state less component
const LocationList = ({cities, onSelectedLocation}) => { // Cuando tengo una única línea puedo utilizar paréntesis sino, se utiliza {} con return dentro
    
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map((city,index) => 
            (
                <WeatherLocation
                    key={city}
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}
                />)
            ) // Si sabemos que city es una clave única que no se va a repetir
        // Sería mejor utilizar city como key en vez de index. Es para que no dependa de la posición del componente en el array.
    );

    return (<div className="locationList">
                {strToComponents(cities)}
            </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;
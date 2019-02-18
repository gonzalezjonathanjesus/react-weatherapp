import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ];

// const data = {
//     temperature: 28,
//     humidity: 10,
//     weatherState: 'sun',
//     wind: 'normal',
// };

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        // fetch or axios (Support level for older browsers)
        fetch( getUrlForecastByCity(this.props.city) )
        .then( 
            data => (data.json())
        )
        .then( 
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );

    }

    renderForecastItemDays() {
        return <h1>Render Itens</h1>;
        //return days.map( day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>);
    }

    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return(
            <div>
                <h2 className='forecastTitle'>Pronóstico Extendido para {city}</h2>
                { forecastData ? this.renderForecastItemDays() : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
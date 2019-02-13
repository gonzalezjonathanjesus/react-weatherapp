import React, { Component } from 'react'; // Import React class from react package
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
// import{ SUN } from './../../constants/weathers'; //Only import constants which we will use and not all for lightweight code

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = { // Only can be modify on the constructor, after constructor you must to use this.setState(); 
            city,
            data: null
        };

        //console.log("constructor");
    }

    componentDidMount() { // Sirve para llamadas al servidor e inicializar cosas
        //console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");
    }
    
    /*
    componentWillMount() {
        console.log("UNSAFE componentWillMount"); // Están desaconsejadas y van a dejar de existir en la versión 17
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate"); // Están desaconsejadas y van a dejar de existir en la versión 17
    }
    */
    
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data => {
            //console.log("Resultado del handleUpdateClick");
            //console.log(data);
            const newWeather = transformWeather(data);
            //console.log(newWeather);
            //debugger;
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? // Operador ternario if
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div> // Babel JSX template that will be rendered
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation; // The rest of the app can be invoke it because we use default
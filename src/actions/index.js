import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }); // This way to generate actions is called "actionCreator"
// Created an actionCreator of type 'setCity'
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload}); 

export const setSelectedCity = payload => {

    return dispatch => { // Provided by redux-thunk

        // Activate in the state an indicator of data searching
        dispatch(setCity(payload));

        return fetch( getUrlForecastByCity(payload) )
        .then( 
            data => (data.json())
        )
        .then( 
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // Modify state with promise result (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};
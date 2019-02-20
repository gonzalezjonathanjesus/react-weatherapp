import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';

import './App.css';
import { createMuiTheme } from '@material-ui/core';

const cities = [
    'Buenos aires,ar',
    'Bogota,col',
    'Santo Domingo,dom',
    'Madrid,es',
    'Moscow,ru',
]

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});



class App extends Component {
    constructor() {
        super();

        this.state = {city: null};
    }

    handleSelectedLocation = city => {
        this.setState({city});
        console.log(`handleSelectedLocation ${city}`);

        store.dispatch(setCity(city)); // We throw an action through dispatch(), with te type (name) and value
        // An action is an object indentified with a type, a string, and value.
    };

    render() {
        const { city } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <Grid fluid>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='h6' color='inherit'>
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <LocationList cities = { cities } onSelectedLocation = {this.handleSelectedLocation}></LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="detail">
                            {/*
                                city ? // Equivalente a city !== null
                                    <ForecastExtended city={this.state.city}></ForecastExtended> :
                                    null
                                */
                                city && // Equivalente al ternario de arriba
                                <ForecastExtended city={this.state.city}></ForecastExtended>
                            }
                                
                            </div>
                        </Paper>
                    </Col>
                </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;

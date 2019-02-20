import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';
import { createMuiTheme } from '@material-ui/core';

const cities = [
    'Buenos aires,ar',
    'Bogota,col',
    'Santo Domingo,dom',
    'Madrid,es',
    'Moscow,ru',
];

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

        this.props.dispatchSetCity(city); // función injectada a las propiedades del componente
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

App.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App); // HighOrderComponent
/* Requires two functions, one that I don't know what is, and the other that are actions, after connect returns another functions that require the result of a component, and returns the component with the capability of connect with the store. */


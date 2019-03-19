import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

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

    render() {
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
                        <LocationListContainer cities = { cities } ></LocationListContainer>   
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="detail">
                                <ForecastExtendedContainer></ForecastExtendedContainer>
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
/* Requires two functions, one that I don't know what is, and the other that are actions, after connect returns another functions that require the result of a component, and returns the component with the capability of connect with the store. */


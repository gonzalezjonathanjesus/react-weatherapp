import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
    'Buenos aires,ar',
    'Bogota,col',
    'Santo Domingo,dom',
    'Madrid,es',
]

class App extends Component {
    constructor() {
        super();

        this.state = {city: 'Nueva ciudad'};
    }

    handleSelectedLocation = city => {
        this.setState({city});
    };

    render() {
        const { city } = this.state;
        return (
            <Grid fluid>
            <Row>
                <AppBar position='sticky'>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
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
                            <ForecastExtended city={this.state.city}></ForecastExtended>
                        </div>
                    </Paper>
                </Col>
            </Row>
            </Grid>
        );
    }
}

export default App;

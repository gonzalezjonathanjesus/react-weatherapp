import { createStore, applyMiddleware, compose } from 'redux'; // Where we will save the state of the app;
import thunk from 'redux-thunk';
import reducers from './../reducers';

// Initial state of the app
const initialState = {
    city: 'Buenos Aires,ar'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Definition of store
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk))); // With this way we create a store
// If you don't use dev tools, just createStore(city, initialState, applyMiddleware(thunk))
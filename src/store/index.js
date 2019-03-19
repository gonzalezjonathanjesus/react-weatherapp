import { createStore } from 'redux'; // Where we will save the state of the app;
import { payload } from './../reducers/city';

const initialState = {
    city: 'Buenos Aires,ar'
}; // Initial state of the app

// Definition of store
export const store = createStore(payload, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // With this way we create a store
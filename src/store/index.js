import { createStore } from 'redux'; // Where we will save the state of the app;

// Definition of store
export const store = createStore( () => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // With this way we create a store
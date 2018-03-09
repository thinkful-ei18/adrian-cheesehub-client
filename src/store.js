import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cheeseReducer} from './reducers/cheese';

// applyMiddleware(thunk)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (
    cheeseReducer, applyMiddleware(thunk)
);
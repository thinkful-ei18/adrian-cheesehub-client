import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cheeseReducer} from './reducers/cheese';
import { composeWithDevTools } from 'redux-devtools-extension';

// applyMiddleware(thunk)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (
    cheeseReducer, composeWithDevTools(
        applyMiddleware(thunk),
    )
);
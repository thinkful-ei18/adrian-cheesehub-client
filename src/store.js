import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cheeseReducer} from './reducers/cheese';

// applyMiddleware(thunk)
export default createStore (
    cheeseReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
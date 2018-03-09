// In client/src/actions/cheese.js add an async action called fetchCheeses which uses the Fetch API to make a GET request to your /api/cheeses endpoint.

// The async action should dispatch its sync counterparts, fetchCheesesRequest, fetchCheesesSuccess and fetchCheesesError.

import {API_BASE_URL} from '../config';


export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = data => ({
    type: FETCH_CHEESE_SUCCESS,
    data
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESE_ERROR,
    error
});

export const fetchCheesesRequest = () => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(({data}) => dispatch(fetchCheesesSuccess(data)))
        .catch(err => {
            dispatch(fetchCheesesError(err));
        });
};

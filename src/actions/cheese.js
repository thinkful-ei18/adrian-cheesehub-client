// In client/src/actions/cheese.js add an async action called fetchCheeses which uses the Fetch API to make a GET request to your /api/cheeses endpoint.

// The async action should dispatch its sync counterparts, fetchCheesesRequest, fetchCheesesSuccess and fetchCheesesError.

import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = data => ({
    type: FETCH_CHEESES_SUCCESS,
    data
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESES_ERROR,
    error
});

export const fetchCheeses = cheese => dispatch => {
  console.log('Fetching cheese:', cheese);
  dispatch(fetchCheesesRequest());
  fetchCheeses(cheese)
    .then(cheeses => {
    console.log('Found:', cheeses);
    dispatch(fetchCheesesSuccess(cheeses));
    })
    .catch(error => {
    console.log('Could not find:', cheese, 'Error:', error);
    dispatch(fetchCheesesError(error));
  });

};
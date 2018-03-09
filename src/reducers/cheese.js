import {FETCH_CHEESES_ERROR, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST} from '../actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export function cheeseReducer(state=initialState, action) {

  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state,
    {
      loading: true,
      error: null
    });
  }
  else if (action.type === FETCH_CHEESES_SUCCESS) {

    if (action.cheeses.length < 1) {
      const error = 'Could not find any cheese!'
      return Object.assign({}, state,
      {error: error, loading: false});
    }

    return Object.assign({}, state,
      {
      cheeses: action.data,
      loading: false,
      error: null
      });
  }
  else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state,
      {
        error: action.error,
        loading: false
      });
  }
  return state;
}

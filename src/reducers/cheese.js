import {FETCH_CHEESES_ERROR, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST} from '../actions/cheese'

const initialState = {
  cheeses: ["Bath Blue",
    "Barkham Blue",
    "Buxton Blue"],
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

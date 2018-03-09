import {FETCH_CHEESE_ERROR, FETCH_CHEESE_SUCCESS} from '../actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_CHEESE_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data,
          error: null
      });
  } else if (action.type === FETCH_CHEESE_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}



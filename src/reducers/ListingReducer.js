import {
  LISTING_FETCH_SUCCESS,
  LISTING_FETCH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  listings: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTING_FETCH_SUCCESS:
      return {
        ...state,
        error: '',
        listings: action.payload,
      };
    case LISTING_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

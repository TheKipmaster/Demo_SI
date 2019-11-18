import {
  LISTING_FETCH_ALL_SUCCESS,
  LISTING_FETCH_ALL_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  listings: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTING_FETCH_ALL_SUCCESS:
      return {
        ...state,
        error: '',
        listings: action.payload,
      };
    case LISTING_FETCH_ALL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

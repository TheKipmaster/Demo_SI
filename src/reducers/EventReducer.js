import {
  EVENT_FETCH_SUCCESS,
  EVENT_FETCH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  events: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_FETCH_SUCCESS:
      return {
        ...state,
        error: '',
        events: action.payload,
      };
    case EVENT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

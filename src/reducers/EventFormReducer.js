import {
  EVENT_FORM_UPDATE,
  EVENT_CREATE_SUCCESS,
  // EVENT_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  subject_ids: 1,
  local: '',
  date: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_FORM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case EVENT_CREATE_SUCCESS:
      return INITIAL_STATE;
    // case EVENT_SAVE_SUCCESS:
    //   return INITIAL_STATE;
    default:
      return state;
  }
};

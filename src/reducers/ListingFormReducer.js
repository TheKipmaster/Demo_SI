import {
  LISTING_FORM_UPDATE,
  // EVENT_CREATE,
  // EVENT_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  title: "",
  description: "",
  kind: "Venda",
  price: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTING_FORM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
      // case EVENT_CREATE:
      //   return INITIAL_STATE;
      // case EVENT_SAVE_SUCCESS:
      //   return INITIAL_STATE;
    default:
      return state;
  }
};

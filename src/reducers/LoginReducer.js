import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  user: {
    token: null,
    registration_id: null,
    email: null,
    name: null,
    ira: null,
    avatar: {
      url: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

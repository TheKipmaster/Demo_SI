import { combineReducers } from 'redux';
import EventFormReducer from './EventFormReducer';

export default combineReducers({
  eventForm: EventFormReducer,
});

import { combineReducers } from 'redux';
import EventFormReducer from './EventFormReducer';
import ListingFormReducer from './ListingFormReducer';
import LoginReducer from './LoginReducer';
import EventReducer from './EventReducer';

export default combineReducers({
  eventForm: EventFormReducer,
  events: EventReducer,
  listingForm: ListingFormReducer,
  auth: LoginReducer,
});

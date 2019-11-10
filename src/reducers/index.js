import { combineReducers } from 'redux';
import EventFormReducer from './EventFormReducer';
import ListingFormReducer from './ListingFormReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
  eventForm: EventFormReducer,
  listingForm: ListingFormReducer,
  auth: LoginReducer,
});

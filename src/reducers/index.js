import { combineReducers } from 'redux';
import EventFormReducer from './EventFormReducer';
import ListingFormReducer from './ListingFormReducer';

export default combineReducers({
  eventForm: EventFormReducer,
  listingForm: ListingFormReducer,
});

import { EVENT_CREATE, API_URL, EVENT_FORM_UPDATE } from './types';
import * as axios from 'axios';
import NavigationService from '../NavigationService';

export const eventFormUpdate = ({ prop, value }) => ({
  type: EVENT_FORM_UPDATE,
  payload: { prop, value }
});

export const eventCreate = (fields, userToken) => (
  (dispatch) => {
    axios.post(
      `${API_URL}/user/calendar/events`,
      { event: fields },
      { headers: { Authorization: userToken } },
    )
      .then(() => eventCreateSuccess(dispatch))
      .catch(error => console.log(error.response));
  }
);

const eventCreateSuccess = (dispatch) => {
  dispatch({ type: EVENT_CREATE });

  dispatch(NavigationService.navigate('Timeline'))
}
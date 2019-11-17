import {
  EVENT_CREATE_SUCCESS,
  EVENT_FETCH_SUCCESS,
  EVENT_FORM_UPDATE,
  EVENT_CREATE_FAIL,
  API_URL,
} from './types';
import * as axios from 'axios';
import NavigationService from '../NavigationService';

export const eventFormUpdate = ({ prop, value }) => ({
  type: EVENT_FORM_UPDATE,
  payload: { prop, value }
});

export const eventFetch = (userToken) => (
  (dispatch) => {
    axios.get(
      `${API_URL}/user/calendar/events.json`,
      { headers: { Authorization: userToken } },
    )
      .then(response => dispatch({ type: EVENT_FETCH_SUCCESS, payload: response.data}))
      .catch(error => console.log(error))
  }
);

export const eventCreate = (fields, userToken) => (
  (dispatch) => {
    axios.post(
      `${API_URL}/user/calendar/events`,
      { event: fields },
      { headers: { Authorization: userToken } },
    )
      .then(() => eventCreateSuccess(dispatch))
      .catch(error => eventCreateFail(dispatch, error.response));
  }
);

const eventCreateSuccess = (dispatch) => {
  dispatch({ type: EVENT_CREATE_SUCCESS });

  dispatch(NavigationService.navigate('TimelineScreen'));
}

const eventCreateFail = (dispatch, response) => {
  dispatch({ type: EVENT_CREATE_FAIL });

  console.log(response);
}
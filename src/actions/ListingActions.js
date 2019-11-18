import * as axios from 'axios';
import NavigationService from '../NavigationService';

import {
  LISTING_CREATE_SUCCESS,
  LISTING_CREATE_FAIL,
  LISTING_FETCH_SUCCESS,
  LISTING_FETCH_FAIL,
  LISTING_FETCH_ALL_SUCCESS,
  LISTING_FETCH_ALL_FAIL,
  LISTING_FORM_UPDATE,
  API_URL,
} from './types';

export const listingFormUpdate = ({ prop, value }) => ({
  type: LISTING_FORM_UPDATE,
  payload: { prop, value }
});

export const listingFetch = (userToken) => (
  (dispatch) => {
    axios.get(
      `${API_URL}/listings.json?my_listings=true`,
      { headers: { Authorization: userToken } },
    )
      .then(response => dispatch({ type: LISTING_FETCH_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: LISTING_FETCH_FAIL, payload: error.response.data }))
  }
);

export const listingFetchAll = (userToken) => (
  (dispatch) => {
    axios.get(
      `${API_URL}/listings.json`,
      { headers: { Authorization: userToken } },
    )
      .then(response => dispatch({ type: LISTING_FETCH_ALL_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: LISTING_FETCH_ALL_FAIL, payload: error.response.data }))
  }
);

export const listingCreate = (fields, userToken) => (
  (dispatch) => {
    axios.post(
      `${API_URL}/listings`,
      { listing: {
        ...fields,
        active: true,
      } },
      { headers: { Authorization: userToken } },
    )
      .then(() => listingCreateSuccess(dispatch))
      .catch(error => listingCreateFail(dispatch, error.response));
  }
);

const listingCreateSuccess = (dispatch) => {
  dispatch({ type: LISTING_CREATE_SUCCESS });

  dispatch(NavigationService.navigate('MyListingsScreen'));
};

const listingCreateFail = (dispatch, response) => {
  dispatch({ type: LISTING_CREATE_FAIL });

  console.log(response);
};
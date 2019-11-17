import * as axios from 'axios';
import NavigationService from '../NavigationService';

import {
  LISTING_FORM_UPDATE,
  LISTING_CREATE_FAIL,
  LISTING_CREATE_SUCCESS,
  API_URL,
} from './types';


export const listingFormUpdate = ({ prop, value }) => ({
  type: LISTING_FORM_UPDATE,
  payload: { prop, value }
});

export const listingCreate = (fields, userToken) => (
  (dispatch) => {
    axios.post(
      `${API_URL}/listings`,
      { listing: fields },
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
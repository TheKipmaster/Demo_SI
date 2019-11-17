import * as axios from 'axios';
import NavigationService from '../NavigationService';

import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  API_URL,
} from './types';

export const loginUser = (email, password) => (
  (dispatch) => {
    dispatch({ type: LOGIN_USER })

    axios.post(`${API_URL}/login`, { user: { email, password } })
      .then(response => loginUserSuccess(dispatch, response))
      .catch(error => loginUserFail(dispatch, error));
  }
);

const loginUserSuccess = (dispatch, response) => {
  const { avatar, registration_id, email, name, ira } = response.data;
  const { authorization } = response.headers

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: {
      registration_id,
      email,
      name,
      ira,
      avatar,
      token: authorization,
    }
  });

  dispatch(NavigationService.navigate('Main'));
};

const loginUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data });
}
import { FORM_UPDATE } from './types';

export const formUpdate = ({ prop, value }) => ({
  type: FORM_UPDATE,
  payload: { prop, value }
});
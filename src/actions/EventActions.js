import { EVENT_UPDATE } from './types';

export const eventUpdate = ({ prop, value }) => ({
  type: EVENT_UPDATE,
  payload: { prop, value }
});
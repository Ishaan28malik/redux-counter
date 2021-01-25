import { Increment, Decrement } from './actionType';

export const INCREMENT = (payload) => {
  return {
    type: Increment,
    payload: payload
  };
};

export const DECREMENT = (payload) => {
  return {
    type: Decrement,
    payload: payload
  };
};

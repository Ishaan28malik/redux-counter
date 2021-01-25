// import { INCREMENT, DECREMENT } from "./action";

/* This is used when many action types are to be used */
// import * as actionType from "./actionType";
import { Increment, Decrement } from './actionType';

const initialState = {
  counter: 0
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:
      return { state, counter: state.counter + action.payload };
    case Decrement:
      return { state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
export default Reducer;

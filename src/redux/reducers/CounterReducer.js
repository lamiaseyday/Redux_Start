import * as ActionTypes from "../actions/ActionTypes";

//action'a göre state belirleme yapılır.
const CounterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case ActionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case ActionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default CounterReducer;
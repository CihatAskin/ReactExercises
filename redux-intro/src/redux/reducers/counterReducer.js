import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 10, action) => {
  let newState;
  console.log("5555");
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      console.log(actionTypes.INCREASE_COUNTER);
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      console.log(actionTypes.DECREASE_COUNTER);

      return (newState = state - action.payload);

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      console.log(actionTypes.DECREASE_COUNTER);

      return (newState = state + action.payload);

    default:
      console.log('Default');

      return state;
  }
};

export default counterReducer;

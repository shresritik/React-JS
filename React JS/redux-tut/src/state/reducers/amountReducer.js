//It is a reducer that takes initial state and the action to be performed. No need of any imports
//action can be selected from the type of action to be done with the payload
const amountReducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
};
export default amountReducer;

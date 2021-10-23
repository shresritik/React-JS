//It is action creator which tell what type of action is to be done
//it is a function which returns a function having dispatch as argument which is also a function having type and payload

export const deposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};
export const withdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

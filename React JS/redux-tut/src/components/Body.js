import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Body = () => {
  const dispatch = useDispatch();
  //bindActionCreators binds the actionCreators i.e. deposit and withdraw and dispatches them to store
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="body">
      <button onClick={() => deposit(100)}>+</button>
      {/* Instead of bindActionCreators this can also be used */}
      {/* <button onClick={() => dispatch(actionCreators.deposit(100))}>+</button> */}

      <h1>Add to cart</h1>
      <button onClick={() => withdraw(100)}>-</button>
    </div>
  );
};

export default Body;

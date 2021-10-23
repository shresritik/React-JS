import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
const Header = () => {
  //accesssing the amount from combinedReducer which takes to amountReducer where initial state=0
  const amount = useSelector((state) => state.amount);
  return (
    <div className="header">
      <button disabled>Price-Rs.{amount}</button>
    </div>
  );
};

export default Header;

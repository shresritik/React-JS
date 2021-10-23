import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <div className="flex">
          <h1>Fake Shop Price-{amount} </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Graphic from "./Graphic";
import Web from "./Web";

function Work() {
  const style = {
    paddingTop: "40px",
    backgroundColor: "rgb(224, 224, 224)",
  };
  return (
    <div id="work">
      <div className="work" style={style}>
        <Graphic />
        <Web />
      </div>
    </div>
  );
}

export default Work;

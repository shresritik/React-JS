import React, { useEffect, useState } from "react";
import "./Progress.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);
  }, [done]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        <h6>{done}%</h6>
      </div>
    </div>
  );
};
export default Progress;

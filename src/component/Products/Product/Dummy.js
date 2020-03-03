import React, { useState } from "react";
import ReactStars from "react-stars";

const Dummy = () => {
  const [state, setState] = useState([
    { id: 47, data: "something", starValue: 3.5 },
    { id: 9696, data: "something", starValue: 1 }
  ]);

  return (
    <div>
    {state.map((item, index) => (
      <div>
        {item.data}
        <ReactStars
          count={5}
          value={item.starValue}
          onChange={starValue =>
            setState(state.map((value, idx) =>
             (idx === index ? { ...value, starValue } : value)))
          }
          size={24}
          color2={"#ffd700"}
        />
        {item.starValue}
      </div>
    ))}
  </div>
  );
};
export default Dummy;

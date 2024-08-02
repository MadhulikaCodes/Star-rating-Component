import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const rating = ["Very Poor", "Poor", "Good", "Very Good", "Excellent"];

const App = () => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (id) => {
    setCount(id);
  };

  const handleMouseOver = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="bg-blue-50 flex flex-col items-center gap-6 p-6 m-32 rounded-md">
      <p className="text-2xl font-bold">Star Rating</p>
      <div className="flex flex-row gap-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            className="text-2xl"
            id={item}
            onClick={() => handleClick(item)}
            onMouseOver={() => handleMouseOver(item)}
            onMouseLeave={handleMouseLeave}
          >
            {item <= (hover || count) ? (
              <FaStar color="gold" />
            ) : (
              <FaRegStar color="gold" />
            )}
          </button>
        ))}
      </div>
      <div>
        <span className="text-xl text-yellow-300">
          {hover > 0 ? rating[hover - 1] : rating[count - 1]}
        </span>
      </div>
    </div>
  );
};

export default App;

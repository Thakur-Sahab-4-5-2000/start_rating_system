import React, { useState } from "react";

const Star = ({ color, showColor, onClick }) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill={showColor ? color : "gray"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <path d="M12 .587l3.668 7.431L24 9.347l-6 5.84 1.417 8.261L12 18.898 4.583 23.448 6 15.688 0 9.347l8.332-1.329L12 .587z" />
    </svg>
  );
};

const App = () => {
  const [stars, setStars] = useState([
    { showColor: false, color: "red" },
    { showColor: false, color: "blue" },
    { showColor: false, color: "yellow" },
    { showColor: false, color: "gold" },
    { showColor: false, color: "green" },
  ]);

  const handleStarClick = (index) => {
    setStars((prevStars) => {
      const updatedStars = prevStars.map((star, i) =>
        i <= index
          ? { ...star, showColor: true }
          : { ...star, showColor: false }
      );
      return updatedStars;
    });
  };

  return (
    <div
      style={{
        width: "25vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {stars.map((star, index) => (
        <Star
          key={index}
          color={star.color}
          showColor={star.showColor}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default App;

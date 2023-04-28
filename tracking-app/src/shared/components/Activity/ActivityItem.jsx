import React, { useState } from "react";
import './ActivityItem.css'

const ActivityItem = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="regist-container">
      <h2>Select an Activity</h2>
      <div className="icon-selector-container">
        <img
          src="./walk_480.png"
          alt="walk"
          onClick={() => handleIconSelect("walk")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "walk" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./running_480.png"
          alt="run"
          onClick={() => handleIconSelect("run")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "run" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./swim_480.png"
          alt="swim"
          onClick={() => handleIconSelect("swim")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "swim" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./bicycle_480.png"
          alt="bike"
          onClick={() => handleIconSelect("bike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "bike" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./hiking_480.png"
          alt="hike"
          onClick={() => handleIconSelect("hike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "hike" ? "2px solid blue" : "none",
          }}
        />
      </div>
      <h3>You have selected: {selectedIcon}</h3>
    </div>
  );
};

export default ActivityItem;